import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.12:0',
  releaseNotes: {
    en_US: `This release fixes a memory leak in the guardian daemon and fixes setup payments for some seat prices.

You do not need to do anything special to update.

Image commit: 4e8b844801dfc3719d6c69701be6dca52c179734. Fedimint: 0.12.0-fedi24.`,
    es_ES: `Esta versión corrige una fuga de memoria en el daemon del guardian y corrige los pagos de configuración para algunos precios de puesto.

No necesitas hacer nada especial para actualizar.

Commit de la imagen: 4e8b844801dfc3719d6c69701be6dca52c179734. Fedimint: 0.12.0-fedi24.`,
    de_DE: `Diese Version behebt ein Speicherleck im Guardian-Daemon und behebt Einrichtungszahlungen für manche Platzpreise.

Für das Update musst du nichts Besonderes tun.

Image-Commit: 4e8b844801dfc3719d6c69701be6dca52c179734. Fedimint: 0.12.0-fedi24.`,
    pl_PL: `To wydanie naprawia wyciek pamięci w demonie guardiana i naprawia płatności za konfigurację dla niektórych cen miejsc.

Aktualizacja nie wymaga żadnych dodatkowych czynności.

Commit obrazu: 4e8b844801dfc3719d6c69701be6dca52c179734. Fedimint: 0.12.0-fedi24.`,
    fr_FR: `Cette version corrige une fuite de mémoire dans le démon du guardian et corrige les paiements de configuration pour certains prix de place.

Vous n’avez rien de particulier à faire pour mettre à jour.

Commit de l’image : 4e8b844801dfc3719d6c69701be6dca52c179734. Fedimint : 0.12.0-fedi24.`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
