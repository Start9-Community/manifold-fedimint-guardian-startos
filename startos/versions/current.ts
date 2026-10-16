import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.5:0',
  releaseNotes: {
    en_US: `This release fixes setting up new federations when guardians run different releases.

- Guardians on 0.1.4 could not finish setting up a new federation with guardians on 0.1.3. Update so your seats can join new federations.

No special upgrade steps are required for normal installations.

Image commit: 99d518ffb4c247fd7616783b9f6b20a9dbc1a739. Fedimint: 0.12.0-fedi12.`,
    es_ES: `Esta versión corrige la configuración de nuevas federaciones cuando los guardians ejecutan versiones distintas.

- Los guardians con 0.1.4 no podían terminar de configurar una nueva federación junto con guardians con 0.1.3. Actualiza para que tus puestos puedan unirse a nuevas federaciones.

Las instalaciones normales no requieren pasos especiales para actualizar.

Commit de la imagen: 99d518ffb4c247fd7616783b9f6b20a9dbc1a739. Fedimint: 0.12.0-fedi12.`,
    de_DE: `Diese Version behebt die Einrichtung neuer Föderationen, wenn Guardians unterschiedliche Versionen ausführen.

- Guardians mit 0.1.4 konnten die Einrichtung einer neuen Föderation zusammen mit Guardians mit 0.1.3 nicht abschließen. Aktualisieren Sie, damit Ihre Plätze neuen Föderationen beitreten können.

Für normale Installationen sind keine besonderen Schritte beim Upgrade erforderlich.

Image-Commit: 99d518ffb4c247fd7616783b9f6b20a9dbc1a739. Fedimint: 0.12.0-fedi12.`,
    pl_PL: `To wydanie naprawia konfigurację nowych federacji, gdy guardiany działają na różnych wydaniach.

- Guardiany z 0.1.4 nie mogły dokończyć konfiguracji nowej federacji razem z guardianami z 0.1.3. Zaktualizuj, aby Twoje miejsca mogły dołączać do nowych federacji.

W przypadku standardowych instalacji aktualizacja nie wymaga dodatkowych czynności.

Commit obrazu: 99d518ffb4c247fd7616783b9f6b20a9dbc1a739. Fedimint: 0.12.0-fedi12.`,
    fr_FR: `Cette version corrige la configuration de nouvelles fédérations lorsque les guardians utilisent des versions différentes.

- Les guardians en 0.1.4 ne pouvaient pas terminer la configuration d’une nouvelle fédération avec des guardians en 0.1.3. Mettez à jour pour que vos sièges puissent rejoindre de nouvelles fédérations.

Aucune étape particulière n’est nécessaire pour mettre à jour une installation standard.

Commit de l’image : 99d518ffb4c247fd7616783b9f6b20a9dbc1a739. Fedimint : 0.12.0-fedi12.`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
