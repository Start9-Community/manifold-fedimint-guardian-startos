import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.11:0',
  releaseNotes: {
    en_US: `This release lowers the memory that guardian seats use on some systems.

You do not need to do anything special to update.

Image commit: cd0f1689df79fc00c9153c9bd9f014113f38c489. Fedimint: 0.12.0-fedi22.`,
    es_ES: `Esta versión reduce la memoria que usan los puestos de guardian en algunos sistemas.

No necesitas hacer nada especial para actualizar.

Commit de la imagen: cd0f1689df79fc00c9153c9bd9f014113f38c489. Fedimint: 0.12.0-fedi22.`,
    de_DE: `Diese Version senkt den Speicherbedarf der Guardian-Plätze auf manchen Systemen.

Für das Update musst du nichts Besonderes tun.

Image-Commit: cd0f1689df79fc00c9153c9bd9f014113f38c489. Fedimint: 0.12.0-fedi22.`,
    pl_PL: `To wydanie zmniejsza ilość pamięci używanej przez miejsca guardianów w niektórych systemach.

Aktualizacja nie wymaga żadnych dodatkowych czynności.

Commit obrazu: cd0f1689df79fc00c9153c9bd9f014113f38c489. Fedimint: 0.12.0-fedi22.`,
    fr_FR: `Cette version réduit la mémoire utilisée par les places de guardian sur certains systèmes.

Vous n’avez rien de particulier à faire pour mettre à jour.

Commit de l’image : cd0f1689df79fc00c9153c9bd9f014113f38c489. Fedimint : 0.12.0-fedi22.`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
