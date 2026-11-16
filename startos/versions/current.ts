import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.16:0',
  releaseNotes: {
    en_US: `This release gives the guardian better control over when it sells new seats. It stops selling new seats while this machine is too busy (CPU, disk or memory). Seats that are already running are not affected, and this does not count against uptime. If your internet plan has a monthly data cap, you can set a monthly data limit, and the guardian then sells no more seats than fit in it. At first start, it runs a one-time CPU check of about 13 seconds.

There are no configuration changes. The first start after the update takes about 13 seconds longer. The Health page asks whether your internet plan has a monthly data limit; if it has none, choose “No monthly limit”.

Image commit: bcd879de33c0109ad15ff9a5c8e4f42fdfcbb8af. Fedimint: 0.12.0-fedi28.`,
    es_ES: `Esta versión da al guardian más control sobre cuándo vende nuevos puestos. Deja de vender nuevos puestos mientras esta máquina está demasiado ocupada (CPU, disco o memoria). Los puestos que ya están en marcha no se ven afectados, y esto no cuenta en contra del tiempo de actividad. Si tu plan de internet tiene un límite mensual de datos, puedes indicar un límite mensual de datos, y el guardian no venderá más puestos de los que caben en él. En el primer arranque, hace una única prueba de CPU de unos 13 segundos.

No hay cambios de configuración. El primer arranque después de actualizar tarda unos 13 segundos más. La página Health pregunta si tu plan de internet tiene un límite mensual de datos; si no lo tiene, elige “No monthly limit”.

Commit de la imagen: bcd879de33c0109ad15ff9a5c8e4f42fdfcbb8af. Fedimint: 0.12.0-fedi28.`,
    de_DE: `Diese Version gibt dem Guardian mehr Kontrolle darüber, wann er neue Plätze verkauft. Er verkauft keine neuen Plätze, solange dieser Rechner zu stark ausgelastet ist (CPU, Platte oder Speicher). Bereits laufende Plätze sind nicht betroffen, und das zählt nicht gegen die Verfügbarkeit. Wenn dein Internettarif ein monatliches Datenlimit hat, kannst du ein monatliches Datenlimit angeben, und der Guardian verkauft dann nicht mehr Plätze, als hineinpassen. Beim ersten Start führt er einmalig eine CPU-Prüfung von etwa 13 Sekunden durch.

Es gibt keine Konfigurationsänderungen. Der erste Start nach dem Update dauert etwa 13 Sekunden länger. Die Seite Health fragt, ob dein Internettarif ein monatliches Datenlimit hat; wenn nicht, wähle „No monthly limit“.

Image-Commit: bcd879de33c0109ad15ff9a5c8e4f42fdfcbb8af. Fedimint: 0.12.0-fedi28.`,
    pl_PL: `To wydanie daje guardianowi większą kontrolę nad tym, kiedy sprzedaje nowe miejsca. Przestaje sprzedawać nowe miejsca, gdy ta maszyna jest zbyt obciążona (procesor, dysk lub pamięć). Już działające miejsca nie są tym objęte i nie obniża to wyniku dostępności. Jeśli twój plan internetowy ma miesięczny limit danych, możesz ustawić miesięczny limit danych, a guardian nie sprzeda wtedy więcej miejsc, niż się w nim mieści. Przy pierwszym uruchomieniu wykonuje jednorazowy test procesora trwający około 13 sekund.

Nie ma zmian w konfiguracji. Pierwsze uruchomienie po aktualizacji trwa około 13 sekund dłużej. Strona Health pyta, czy twój plan internetowy ma miesięczny limit danych; jeśli nie ma, wybierz „No monthly limit”.

Commit obrazu: bcd879de33c0109ad15ff9a5c8e4f42fdfcbb8af. Fedimint: 0.12.0-fedi28.`,
    fr_FR: `Cette version donne au guardian plus de contrôle sur le moment où il vend de nouvelles places. Il cesse de vendre de nouvelles places tant que cette machine est trop occupée (processeur, disque ou mémoire). Les places déjà en service ne sont pas concernées, et cela ne compte pas contre la disponibilité. Si votre forfait internet a un plafond mensuel de données, vous pouvez indiquer une limite mensuelle de données, et le guardian ne vend alors pas plus de places qu’elle n’en permet. Au premier démarrage, il effectue une vérification unique du processeur d’environ 13 secondes.

Il n’y a aucun changement de configuration. Le premier démarrage après la mise à jour prend environ 13 secondes de plus. La page Health demande si votre forfait internet a une limite mensuelle de données ; s’il n’en a pas, choisissez « No monthly limit ».

Commit de l’image : bcd879de33c0109ad15ff9a5c8e4f42fdfcbb8af. Fedimint : 0.12.0-fedi28.`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
