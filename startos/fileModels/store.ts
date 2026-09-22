import { FileHelper } from '@start9labs/start-sdk'
import { z } from 'zod'
import { sdk } from '../sdk'

const shape = z.looseObject({
  operatorPassword: z.string().nullable().catch(null),
})

export const storeJson = FileHelper.json(
  { base: sdk.volumes.main, subpath: './store.json' },
  shape,
)
