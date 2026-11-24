import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.20:0',
  releaseNotes: {
    en_US: `The guardian now stops selling new seats while its own consensus is slow. It measures how long its seats take to order consensus items, and when the 6-hour average is over 5 seconds, the Health page shows the Consensus speed check as failing and no new seats are sold. Running seats are not affected, and this does not count against uptime.

On a btrfs drive, which StartOS uses, the guardian now reserves 160 GB of disk per new seat instead of 80 GB, because btrfs wears SSDs faster. Seats that are already running are not affected.

It also fixes a memory leak that made some guardians use more and more memory over time, and it retries joining a payment federation that failed instead of waiting for a restart.

There are no configuration changes. The guardian adds one database table on its first start, and you do not need to do anything.

Image commit: d5bb8092b8f8717cc4ef65f7bd7a201ebc0dce91. Fedimint: 0.12.0-fedi30.`,
    es_ES: `El guardian deja ahora de vender puestos nuevos mientras su propio consenso va lento. Mide cuánto tardan sus puestos en ordenar los elementos de consenso y, cuando la media de 6 horas supera los 5 segundos, la página Health muestra la comprobación Consensus speed como fallida y no se venden puestos nuevos. Los puestos en marcha no se ven afectados, y esto no cuenta en contra del uptime.

En un disco btrfs, el que usa StartOS, el guardian reserva ahora 160 GB de disco por puesto nuevo en lugar de 80 GB, porque btrfs desgasta los SSD más rápido. Los puestos que ya están en marcha no se ven afectados.

También corrige una fuga de memoria que hacía que algunos guardians usaran cada vez más memoria, y reintenta unirse a una federación de pagos que falló en lugar de esperar a un reinicio.

No hay cambios de configuración. El guardian añade una tabla a su base de datos en el primer arranque, y no necesitas hacer nada.

Commit de la imagen: d5bb8092b8f8717cc4ef65f7bd7a201ebc0dce91. Fedimint: 0.12.0-fedi30.`,
    de_DE: `Der Guardian verkauft jetzt keine neuen Plätze mehr, solange sein eigener Konsens langsam ist. Er misst, wie lange seine Plätze brauchen, um Konsenselemente zu ordnen, und wenn der 6-Stunden-Durchschnitt über 5 Sekunden liegt, zeigt die Seite Health die Prüfung Consensus speed als fehlgeschlagen und es werden keine neuen Plätze verkauft. Laufende Plätze sind nicht betroffen, und das zählt nicht gegen die Uptime.

Auf einem btrfs-Laufwerk, wie es StartOS verwendet, reserviert der Guardian jetzt 160 GB Speicher pro neuem Platz statt 80 GB, weil btrfs SSDs schneller abnutzt. Bereits laufende Plätze sind nicht betroffen.

Außerdem behebt die Version ein Speicherleck, durch das manche Guardians mit der Zeit immer mehr Arbeitsspeicher belegten, und sie versucht den Beitritt zu einer Zahlungsföderation erneut, wenn er fehlgeschlagen ist, statt auf einen Neustart zu warten.

Es gibt keine Konfigurationsänderungen. Der Guardian legt beim ersten Start eine Datenbanktabelle an, und du musst nichts tun.

Image-Commit: d5bb8092b8f8717cc4ef65f7bd7a201ebc0dce91. Fedimint: 0.12.0-fedi30.`,
    pl_PL: `Guardian przestaje teraz sprzedawać nowe miejsca, gdy jego własny konsensus działa wolno. Mierzy, ile czasu jego miejscom zajmuje porządkowanie elementów konsensusu, a gdy średnia z 6 godzin przekracza 5 sekund, strona Health pokazuje test Consensus speed jako nieudany i nowe miejsca nie są sprzedawane. Działające miejsca nie są tym objęte, a nie wpływa to na uptime.

Na dysku btrfs, którego używa StartOS, guardian rezerwuje teraz 160 GB miejsca na każde nowe miejsce zamiast 80 GB, ponieważ btrfs szybciej zużywa dyski SSD. Już działające miejsca nie są tym objęte.

Wydanie naprawia też wyciek pamięci, przez który niektóre guardiany z czasem zużywały coraz więcej pamięci, a nieudane dołączenie do federacji płatności jest ponawiane zamiast czekać na ponowne uruchomienie.

Nie ma zmian w konfiguracji. Przy pierwszym uruchomieniu guardian dodaje jedną tabelę do bazy danych i nie musisz nic robić.

Commit obrazu: d5bb8092b8f8717cc4ef65f7bd7a201ebc0dce91. Fedimint: 0.12.0-fedi30.`,
    fr_FR: `Le guardian arrête désormais de vendre de nouvelles places tant que son propre consensus est lent. Il mesure le temps que mettent ses places à ordonner les éléments de consensus et, quand la moyenne sur 6 heures dépasse 5 secondes, la page Health affiche la vérification Consensus speed en échec et aucune nouvelle place n’est vendue. Les places en service ne sont pas concernées, et cela ne compte pas contre l’uptime.

Sur un disque btrfs, celui qu’utilise StartOS, le guardian réserve maintenant 160 Go de disque par nouvelle place au lieu de 80 Go, car btrfs use les SSD plus vite. Les places déjà en service ne sont pas concernées.

Cette version corrige aussi une fuite de mémoire qui faisait consommer de plus en plus de mémoire à certains guardians, et elle réessaie de rejoindre une fédération de paiement en cas d’échec au lieu d’attendre un redémarrage.

Il n’y a aucun changement de configuration. Le guardian ajoute une table à sa base de données au premier démarrage, et vous n’avez rien à faire.

Commit de l’image : d5bb8092b8f8717cc4ef65f7bd7a201ebc0dce91. Fedimint : 0.12.0-fedi30.`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
