import { sdk } from './sdk'

export const setDependencies = sdk.setupDependencies(async () => ({
  bitcoind: {
    kind: 'running',
    versionRange: '>=28.4:14',
    healthChecks: ['bitcoind', 'sync-progress'],
  },
}))
