import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.8:0',
  releaseNotes: {
    en_US: `This release fixes guardian setup. On 0.1.6 and 0.1.7, a new or restored guardian could stay on "Checking whether this host has been approved…" with no way forward. The setup step now shows a "Check status" button in that state.

No special upgrade steps are required for normal installations.

Image commit: 0d1472e844111fd5eed2a7f61d3eda92b74e03f3. Fedimint: 0.12.0-fedi15.`,
    es_ES: `Esta versión corrige la configuración del guardian. En 0.1.6 y 0.1.7, un guardian nuevo o restaurado podía quedarse en "Comprobando si este host ha sido aprobado…" sin forma de continuar. Ahora el paso de configuración muestra un botón "Check status" en ese estado.

Las instalaciones normales no requieren pasos especiales para actualizar.

Commit de la imagen: 0d1472e844111fd5eed2a7f61d3eda92b74e03f3. Fedimint: 0.12.0-fedi15.`,
    de_DE: `Diese Version behebt die Einrichtung des Guardians. Unter 0.1.6 und 0.1.7 konnte ein neuer oder wiederhergestellter Guardian bei „Es wird geprüft, ob dieser Host genehmigt wurde…“ hängen bleiben, ohne weiterzukommen. Der Einrichtungsschritt zeigt in diesem Zustand jetzt die Schaltfläche „Check status“.

Für normale Installationen sind keine besonderen Schritte beim Upgrade erforderlich.

Image-Commit: 0d1472e844111fd5eed2a7f61d3eda92b74e03f3. Fedimint: 0.12.0-fedi15.`,
    pl_PL: `To wydanie naprawia konfigurację guardiana. W wersjach 0.1.6 i 0.1.7 nowy lub przywrócony guardian mógł utknąć na komunikacie „Sprawdzanie, czy ten host został zatwierdzony…” bez możliwości przejścia dalej. Krok konfiguracji pokazuje teraz w tym stanie przycisk „Check status”.

W przypadku standardowych instalacji aktualizacja nie wymaga dodatkowych czynności.

Commit obrazu: 0d1472e844111fd5eed2a7f61d3eda92b74e03f3. Fedimint: 0.12.0-fedi15.`,
    fr_FR: `Cette version corrige la configuration du guardian. Avec 0.1.6 et 0.1.7, un guardian nouveau ou restauré pouvait rester bloqué sur « Vérification de l’approbation de cet hôte… » sans moyen de continuer. L’étape de configuration affiche maintenant un bouton « Check status » dans cet état.

Aucune étape particulière n’est nécessaire pour mettre à jour une installation standard.

Commit de l’image : 0d1472e844111fd5eed2a7f61d3eda92b74e03f3. Fedimint : 0.12.0-fedi15.`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
