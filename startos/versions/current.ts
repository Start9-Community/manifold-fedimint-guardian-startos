import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.2:0',
  releaseNotes: {
    en_US: `This release improves access to support.

- Added a Support page where you can chat privately with the team about your guardian. A red dot on Support shows unread messages. Note that support will never ask for your recovery phrase, your password or remote access to your machine.

- Small reliability improvements.

No special upgrade steps are required for normal installations.`,
    es_ES: `Esta versión mejora el acceso al soporte.

- Se ha añadido una página de Soporte donde puedes hablar en privado con el equipo sobre tu guardian. Un punto rojo en Soporte indica que hay mensajes sin leer. Recuerda que el equipo de soporte nunca te pedirá tu frase de recuperación, tu contraseña ni acceso remoto a tu equipo.

- Pequeñas mejoras de fiabilidad.

Las instalaciones normales no requieren pasos especiales para actualizar.`,
    de_DE: `Diese Version verbessert den Zugang zum Support.

- Eine Support-Seite wurde hinzugefügt, auf der du dich privat mit dem Team über deinen Guardian austauschen kannst. Ein roter Punkt bei Support zeigt ungelesene Nachrichten an. Bitte beachte: Der Support wird dich niemals nach deiner Wiederherstellungsphrase, deinem Passwort oder Fernzugriff auf deinen Rechner fragen.

- Kleine Verbesserungen der Zuverlässigkeit.

Für normale Installationen sind keine besonderen Schritte beim Upgrade erforderlich.`,
    pl_PL: `To wydanie ułatwia kontakt ze wsparciem.

- Dodano stronę Wsparcie, na której możesz prywatnie porozmawiać z zespołem o swoim guardianie. Czerwona kropka przy Wsparciu oznacza nieprzeczytane wiadomości. Pamiętaj, że zespół wsparcia nigdy nie poprosi o frazę odzyskiwania, hasło ani zdalny dostęp do Twojego komputera.

- Drobne poprawki niezawodności.

W przypadku standardowych instalacji aktualizacja nie wymaga dodatkowych czynności.`,
    fr_FR: `Cette version facilite l’accès à l’assistance.

- Ajout d’une page Assistance où vous pouvez discuter en privé avec l’équipe au sujet de votre guardian. Un point rouge sur Assistance indique des messages non lus. L’équipe d’assistance ne vous demandera jamais votre phrase de récupération, votre mot de passe ni un accès à distance à votre machine.

- Petites améliorations de fiabilité.

Aucune étape particulière n’est nécessaire pour mettre à jour une installation standard.`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
