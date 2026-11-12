import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.14:0',
  releaseNotes: {
    en_US: `This release updates Fedimint to 0.12.0-fedi27 and adds diagnostics that help find memory, network and disk problems in guardian seats.

You do not need to do anything special to update.

Image commit: 5b1967aba99869cee8acc8a34bfebaf472e06ec9. Fedimint: 0.12.0-fedi27.`,
    es_ES: `Esta versión actualiza Fedimint a 0.12.0-fedi27 y añade diagnósticos que ayudan a encontrar problemas de memoria, red y disco en los puestos de guardian.

No necesitas hacer nada especial para actualizar.

Commit de la imagen: 5b1967aba99869cee8acc8a34bfebaf472e06ec9. Fedimint: 0.12.0-fedi27.`,
    de_DE: `Diese Version aktualisiert Fedimint auf 0.12.0-fedi27 und fügt Diagnosen hinzu, die helfen, Speicher-, Netzwerk- und Plattenprobleme der Guardian-Plätze zu finden.

Für das Update musst du nichts Besonderes tun.

Image-Commit: 5b1967aba99869cee8acc8a34bfebaf472e06ec9. Fedimint: 0.12.0-fedi27.`,
    pl_PL: `To wydanie aktualizuje Fedimint do 0.12.0-fedi27 i dodaje diagnostykę, która pomaga znaleźć problemy z pamięcią, siecią i dyskiem w miejscach guardianów.

Aktualizacja nie wymaga żadnych dodatkowych czynności.

Commit obrazu: 5b1967aba99869cee8acc8a34bfebaf472e06ec9. Fedimint: 0.12.0-fedi27.`,
    fr_FR: `Cette version met à jour Fedimint vers 0.12.0-fedi27 et ajoute des diagnostics qui aident à trouver les problèmes de mémoire, de réseau et de disque des places de guardian.

Vous n’avez rien de particulier à faire pour mettre à jour.

Commit de l’image : 5b1967aba99869cee8acc8a34bfebaf472e06ec9. Fedimint : 0.12.0-fedi27.`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
