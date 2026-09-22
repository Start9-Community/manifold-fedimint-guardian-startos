import * as fs from 'fs'
import { FileHelper } from '@start9labs/start-sdk'
import { storeJson } from './fileModels/store'
import { i18n } from './i18n'
import { sdk } from './sdk'
import { passwordContainerPath, passwordVolumePath, uiPort } from './utils'

export const main = sdk.setupMain(async ({ effects }) => {
  const password = await storeJson
    .read((s) => s?.operatorPassword)
    .const(effects)
  if (!password)
    throw new Error(i18n('Set the dashboard password before starting.'))
  // The daemon refuses a password file readable by other users.
  fs.writeFileSync(passwordVolumePath, `${password}\n`, { mode: 0o600 })
  fs.chmodSync(passwordVolumePath, 0o600)

  const mounts = sdk.Mounts.of()
    .mountVolume({
      volumeId: 'main',
      subpath: null,
      mountpoint: '/data',
      readonly: false,
    })
    .mountDependency({
      dependencyId: 'bitcoind',
      volumeId: 'main',
      subpath: null,
      mountpoint: '/mnt/bitcoin',
      readonly: true,
    })
  const sub = sdk.SubContainer.of(
    effects,
    { imageId: 'fman' },
    mounts,
    'fman-sub',
  )
  const address = await sdk.host
    .getBridgeAddress(effects, {
      packageId: 'bitcoind',
      hostId: 'rpc',
      internalPort: 8332,
      ssl: false,
    })
    .const()
  if (!address) throw new Error(i18n('Local Bitcoin is not reachable.'))
  const rootfs = await sub.rootfs
  const cookie = await FileHelper.string(`${rootfs}/mnt/bitcoin/.cookie`)
    .read(
      (value) => value?.trim(),
      (previous, next) => next === null || previous === next,
    )
    .const(effects)
  if (!cookie || !/^[^:]+:.+$/.test(cookie)) {
    throw new Error(i18n('Local Bitcoin RPC credentials are unavailable.'))
  }
  const colon = cookie.indexOf(':')

  return sdk.Daemons.of(effects).addDaemon('fman', {
    subcontainer: sub,
    exec: {
      command: [
        '/bin/fleet-manager',
        'serve',
        '--data-dir',
        '/data',
        '--manifold-environment',
        'production',
        '--bitcoind-url',
        `http://${address}`,
        '--bitcoind-username',
        cookie.slice(0, colon),
        `--bitcoind-password=${cookie.slice(colon + 1)}`,
        '--esplora-url',
        'https://mempool.space/api',
        '--admin-http-bind',
        `0.0.0.0:${uiPort}`,
        '--admin-http-auth',
        'password',
        '--admin-http-password-file',
        passwordContainerPath,
      ],
      env: {
        // StartOS exec does not inherit the Nix image's environment.
        SSL_CERT_FILE: '/etc/ssl/certs/ca-bundle.crt',
        FS_MISTRUST_DISABLE_PERMISSIONS_CHECKS: 'true',
      },
    },
    ready: {
      display: i18n('Operator Dashboard'),
      fn: () =>
        sdk.healthCheck.checkPortListening(effects, uiPort, {
          successMessage: i18n('The operator dashboard is ready'),
          errorMessage: i18n('The operator dashboard is not ready'),
        }),
    },
    requires: [],
  })
})
