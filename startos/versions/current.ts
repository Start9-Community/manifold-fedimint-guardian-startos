import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.13:0',
  releaseNotes: {
    en_US: `This release lowers the memory and disk use of guardian seats that restart often, and keeps more of their diagnostic history.

You do not need to do anything special to update.

Image commit: 8865f67304c2b558055c9ebc53cc529ad5e812ac. Fedimint: 0.12.0-fedi25.`,
    es_ES: `Esta versión reduce la memoria y el disco que usan los puestos de guardian que se reinician a menudo, y conserva más de su historial de diagnóstico.

No necesitas hacer nada especial para actualizar.

Commit de la imagen: 8865f67304c2b558055c9ebc53cc529ad5e812ac. Fedimint: 0.12.0-fedi25.`,
    de_DE: `Diese Version senkt den Speicher- und Plattenbedarf von Guardian-Plätzen, die oft neu starten, und behält mehr von ihrem Diagnoseverlauf.

Für das Update musst du nichts Besonderes tun.

Image-Commit: 8865f67304c2b558055c9ebc53cc529ad5e812ac. Fedimint: 0.12.0-fedi25.`,
    pl_PL: `To wydanie zmniejsza użycie pamięci i dysku przez miejsca guardianów, które często się restartują, i zachowuje więcej ich historii diagnostycznej.

Aktualizacja nie wymaga żadnych dodatkowych czynności.

Commit obrazu: 8865f67304c2b558055c9ebc53cc529ad5e812ac. Fedimint: 0.12.0-fedi25.`,
    fr_FR: `Cette version réduit la mémoire et le disque utilisés par les places de guardian qui redémarrent souvent, et conserve davantage de leur historique de diagnostic.

Vous n’avez rien de particulier à faire pour mettre à jour.

Commit de l’image : 8865f67304c2b558055c9ebc53cc529ad5e812ac. Fedimint : 0.12.0-fedi25.`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
