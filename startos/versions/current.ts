import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.15:0',
  releaseNotes: {
    en_US: `This release updates Fedimint to 0.12.0-fedi28 and adds diagnostics that help find memory, network and disk problems in guardian seats. It also adds metrics on the health of federation consensus.

You do not need to do anything special to update.

Image commit: bb5fe29eee54256e78d2f678b0eca5975bbb98fb. Fedimint: 0.12.0-fedi28.`,
    es_ES: `Esta versión actualiza Fedimint a 0.12.0-fedi28 y añade diagnósticos que ayudan a encontrar problemas de memoria, red y disco en los puestos de guardian. También añade métricas sobre la salud del consenso de la federación.

No necesitas hacer nada especial para actualizar.

Commit de la imagen: bb5fe29eee54256e78d2f678b0eca5975bbb98fb. Fedimint: 0.12.0-fedi28.`,
    de_DE: `Diese Version aktualisiert Fedimint auf 0.12.0-fedi28 und fügt Diagnosen hinzu, die helfen, Speicher-, Netzwerk- und Plattenprobleme der Guardian-Plätze zu finden. Außerdem fügt sie Metriken zum Zustand des Föderationskonsenses hinzu.

Für das Update musst du nichts Besonderes tun.

Image-Commit: bb5fe29eee54256e78d2f678b0eca5975bbb98fb. Fedimint: 0.12.0-fedi28.`,
    pl_PL: `To wydanie aktualizuje Fedimint do 0.12.0-fedi28 i dodaje diagnostykę, która pomaga znaleźć problemy z pamięcią, siecią i dyskiem w miejscach guardianów. Dodaje też metryki stanu konsensusu federacji.

Aktualizacja nie wymaga żadnych dodatkowych czynności.

Commit obrazu: bb5fe29eee54256e78d2f678b0eca5975bbb98fb. Fedimint: 0.12.0-fedi28.`,
    fr_FR: `Cette version met à jour Fedimint vers 0.12.0-fedi28 et ajoute des diagnostics qui aident à trouver les problèmes de mémoire, de réseau et de disque des places de guardian. Elle ajoute aussi des métriques sur la santé du consensus de la fédération.

Vous n’avez rien de particulier à faire pour mettre à jour.

Commit de l’image : bb5fe29eee54256e78d2f678b0eca5975bbb98fb. Fedimint : 0.12.0-fedi28.`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
