import { setPassword } from '../actions/setPassword'
import { storeJson } from '../fileModels/store'
import { i18n } from '../i18n'
import { sdk } from '../sdk'

export const watchPassword = sdk.setupOnInit(async (effects) => {
  const password = await storeJson
    .read((s) => s?.operatorPassword)
    .const(effects)
  if (!password) {
    await sdk.action.createOwnTask(effects, setPassword, 'critical', {
      reason: i18n('Set the dashboard password before starting.'),
    })
  }
})
