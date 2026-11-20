import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.18:0',
  releaseNotes: {
    en_US: `Your guardian now reports figures about its federation to the Federation Ambassador who runs it: the bitcoin the federation holds, how many wallets were active in the last 30 days, and its Lightning and on-chain payment volume. The Ambassador combines the reports from all guardians. Fedimint 0.12.0-fedi29 adds the volume counting.

The Overview and Payouts pages no longer stay stuck loading while a payment wallet is recovering. They now say the wallet is recovering. The Overview page also invites you to set up mobile notifications when they are available.

The temporary uptime reset added in 0.1.17 is removed.

There are no configuration changes. The guardian adds two new database tables on its first start, and you do not need to do anything.

Image commit: 520189cfd333e3a94435ac7c7668443395aa2efa. Fedimint: 0.12.0-fedi29.`,
    es_ES: `Tu guardian ahora informa de datos sobre su federación al Federation Ambassador que la gestiona: el bitcoin que custodia la federación, cuántos monederos estuvieron activos en los últimos 30 días y su volumen de pagos Lightning y on-chain. El Ambassador combina los informes de todos los guardians. Fedimint 0.12.0-fedi29 añade el recuento del volumen.

Las páginas Overview y Payouts ya no se quedan cargando mientras un monedero de pagos se está recuperando. Ahora indican que el monedero se está recuperando. La página Overview también te invita a configurar las notificaciones móviles cuando están disponibles.

Se elimina el reinicio temporal del uptime añadido en 0.1.17.

No hay cambios de configuración. El guardian añade dos tablas nuevas a su base de datos en el primer arranque, y no necesitas hacer nada.

Commit de la imagen: 520189cfd333e3a94435ac7c7668443395aa2efa. Fedimint: 0.12.0-fedi29.`,
    de_DE: `Dein Guardian meldet jetzt Kennzahlen seiner Föderation an den Federation Ambassador, der sie betreut: die Bitcoin, die die Föderation verwahrt, wie viele Wallets in den letzten 30 Tagen aktiv waren, und ihr Lightning- und On-Chain-Zahlungsvolumen. Der Ambassador fasst die Meldungen aller Guardians zusammen. Fedimint 0.12.0-fedi29 ergänzt die Zählung des Volumens.

Die Seiten Overview und Payouts bleiben nicht mehr beim Laden hängen, während eine Zahlungs-Wallet wiederhergestellt wird. Sie zeigen jetzt an, dass die Wallet wiederhergestellt wird. Die Seite Overview lädt dich außerdem ein, Mobile-Benachrichtigungen einzurichten, sobald sie verfügbar sind.

Das vorübergehende Zurücksetzen der Uptime aus 0.1.17 wurde entfernt.

Es gibt keine Konfigurationsänderungen. Der Guardian legt beim ersten Start zwei neue Datenbanktabellen an, und du musst nichts tun.

Image-Commit: 520189cfd333e3a94435ac7c7668443395aa2efa. Fedimint: 0.12.0-fedi29.`,
    pl_PL: `Twój guardian przekazuje teraz dane o swojej federacji Federation Ambassadorowi, który nią zarządza: ile bitcoinów przechowuje federacja, ile portfeli było aktywnych w ciągu ostatnich 30 dni oraz jaki jest jej wolumen płatności Lightning i on-chain. Ambassador łączy raporty wszystkich guardianów. Fedimint 0.12.0-fedi29 dodaje zliczanie wolumenu.

Strony Overview i Payouts nie zatrzymują się już na ładowaniu, gdy portfel płatności jest odzyskiwany. Teraz informują, że portfel jest w trakcie odzyskiwania. Strona Overview zachęca też do skonfigurowania powiadomień mobilnych, gdy są dostępne.

Usunięto tymczasowy reset uptime dodany w 0.1.17.

Nie ma zmian w konfiguracji. Przy pierwszym uruchomieniu guardian dodaje dwie nowe tabele do bazy danych i nie musisz nic robić.

Commit obrazu: 520189cfd333e3a94435ac7c7668443395aa2efa. Fedimint: 0.12.0-fedi29.`,
    fr_FR: `Votre guardian transmet désormais des chiffres sur sa fédération au Federation Ambassador qui la gère : les bitcoins détenus par la fédération, le nombre de portefeuilles actifs au cours des 30 derniers jours, et son volume de paiements Lightning et on-chain. L’Ambassador combine les rapports de tous les guardians. Fedimint 0.12.0-fedi29 ajoute le comptage du volume.

Les pages Overview et Payouts ne restent plus bloquées en chargement pendant la récupération d’un portefeuille de paiement. Elles indiquent maintenant que le portefeuille est en cours de récupération. La page Overview vous invite aussi à configurer les notifications mobiles lorsqu’elles sont disponibles.

La réinitialisation temporaire de l’uptime ajoutée en 0.1.17 est supprimée.

Il n’y a aucun changement de configuration. Le guardian ajoute deux nouvelles tables à sa base de données au premier démarrage, et vous n’avez rien à faire.

Commit de l’image : 520189cfd333e3a94435ac7c7668443395aa2efa. Fedimint : 0.12.0-fedi29.`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
