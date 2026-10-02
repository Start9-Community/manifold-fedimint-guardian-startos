import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.1:0',
  releaseNotes: {
    en_US: `This release improves reliability and day-to-day operation of Manifold Fedimint Guardian.

- Added a built-in Health page to help diagnose common setup and connectivity issues without exposing sensitive information.
- Improved guardian startup so temporary issues with fallback Bitcoin services do not unnecessarily block startup.
- Fixed authorization updates so newer badge authorizations correctly replace older ones.

No special upgrade steps are required for normal installations.`,
    es_ES: `Esta versión mejora la fiabilidad y el funcionamiento diario de Manifold Fedimint Guardian.

- Se ha añadido una página de estado integrada para ayudar a diagnosticar problemas comunes de configuración y conectividad sin exponer información sensible.
- Se ha mejorado el inicio del guardian para que los problemas temporales con los servicios Bitcoin de respaldo no bloqueen innecesariamente el inicio.
- Se han corregido las actualizaciones de autorización para que las autorizaciones de credenciales más recientes sustituyan correctamente a las anteriores.

Las instalaciones normales no requieren pasos especiales para actualizar.`,
    de_DE: `Diese Version verbessert die Zuverlässigkeit und den täglichen Betrieb von Manifold Fedimint Guardian.

- Eine integrierte Statusseite hilft dabei, häufige Einrichtungs- und Verbindungsprobleme zu erkennen, ohne vertrauliche Informationen offenzulegen.
- Der Start des Guardians wurde verbessert, damit vorübergehende Probleme mit Bitcoin-Ersatzdiensten ihn nicht unnötig blockieren.
- Aktualisierungen von Berechtigungen wurden korrigiert, damit neuere Badge-Berechtigungen ältere korrekt ersetzen.

Für normale Installationen sind keine besonderen Schritte beim Upgrade erforderlich.`,
    pl_PL: `To wydanie poprawia niezawodność i codzienne działanie Manifold Fedimint Guardian.

- Dodano wbudowaną stronę stanu, która pomaga diagnozować typowe problemy z konfiguracją i łącznością bez ujawniania poufnych informacji.
- Usprawniono uruchamianie guardiana, aby tymczasowe problemy z zapasowymi usługami Bitcoin nie blokowały go niepotrzebnie.
- Poprawiono aktualizacje autoryzacji, tak aby nowsze autoryzacje poświadczeń prawidłowo zastępowały starsze.

W przypadku standardowych instalacji aktualizacja nie wymaga dodatkowych czynności.`,
    fr_FR: `Cette version améliore la fiabilité et le fonctionnement quotidien de Manifold Fedimint Guardian.

- Ajout d’une page d’état intégrée pour aider à diagnostiquer les problèmes courants de configuration et de connectivité sans exposer d’informations sensibles.
- Amélioration du démarrage du guardian afin que les problèmes temporaires des services Bitcoin de secours ne le bloquent pas inutilement.
- Correction des mises à jour d’autorisation afin que les autorisations de badges plus récentes remplacent correctement les anciennes.

Aucune étape particulière n’est nécessaire pour mettre à jour une installation standard.`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
