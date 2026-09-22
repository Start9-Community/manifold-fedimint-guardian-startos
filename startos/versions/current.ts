import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.0:0',
  releaseNotes: {
    en_US:
      'Initial StartOS release. Image 0d31e0b738ed91b628194458a99c306356e60327, including Fedimint v0.12.0-fedi6.',
    es_ES:
      'Lanzamiento inicial para StartOS. 0d31e0b738ed91b628194458a99c306356e60327 / Fedimint v0.12.0-fedi6.',
    de_DE:
      'Erstveröffentlichung für StartOS. 0d31e0b738ed91b628194458a99c306356e60327 / Fedimint v0.12.0-fedi6.',
    pl_PL:
      'Pierwsze wydanie dla StartOS. 0d31e0b738ed91b628194458a99c306356e60327 / Fedimint v0.12.0-fedi6.',
    fr_FR:
      'Version initiale pour StartOS. 0d31e0b738ed91b628194458a99c306356e60327 / Fedimint v0.12.0-fedi6.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
