import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.17:0',
  releaseNotes: {
    en_US: `This release fixes a problem where the guardian could lose its relay connection and stay disconnected until it was restarted. While disconnected, it failed its readiness checks and stopped selling new seats. It now reconnects on its own.

The guardian also sells no more seats than its data drive can hold, at about 80 GB per seat: 6 seats on a 512 GB drive and 12 on a 1 TB drive. The Offer page shows this limit under Seat capacity. Seats that are already running are not affected.

There are no configuration changes, and you do not need to do anything special to update.

Image commit: 87c5ca2f9fecbe8943662e1f96cd19a1eb6f8b48. Fedimint: 0.12.0-fedi28.`,
    es_ES: `Esta versión corrige un problema por el que el guardian podía perder su conexión con el relay y quedarse desconectado hasta que se reiniciaba. Mientras estaba desconectado, fallaban sus comprobaciones de disponibilidad y dejaba de vender nuevos puestos. Ahora se vuelve a conectar por sí solo.

El guardian tampoco vende más puestos de los que caben en su disco de datos, a unos 80 GB por puesto: 6 puestos en un disco de 512 GB y 12 en uno de 1 TB. La página Offer muestra este límite en Seat capacity. Los puestos que ya están en marcha no se ven afectados.

No hay cambios de configuración y no necesitas hacer nada especial para actualizar.

Commit de la imagen: 87c5ca2f9fecbe8943662e1f96cd19a1eb6f8b48. Fedimint: 0.12.0-fedi28.`,
    de_DE: `Diese Version behebt ein Problem, durch das der Guardian seine Relay-Verbindung verlieren und bis zu einem Neustart getrennt bleiben konnte. Solange er getrennt war, schlugen seine Bereitschaftsprüfungen fehl und er verkaufte keine neuen Plätze. Jetzt verbindet er sich von selbst wieder.

Außerdem verkauft der Guardian nicht mehr Plätze, als auf sein Datenlaufwerk passen, bei etwa 80 GB pro Platz: 6 Plätze auf einem 512-GB-Laufwerk und 12 auf einem 1-TB-Laufwerk. Die Seite Offer zeigt dieses Limit unter Seat capacity. Bereits laufende Plätze sind nicht betroffen.

Es gibt keine Konfigurationsänderungen, und für das Update musst du nichts Besonderes tun.

Image-Commit: 87c5ca2f9fecbe8943662e1f96cd19a1eb6f8b48. Fedimint: 0.12.0-fedi28.`,
    pl_PL: `To wydanie naprawia problem, przez który guardian mógł stracić połączenie z relayem i pozostawać rozłączony aż do ponownego uruchomienia. Podczas rozłączenia jego testy gotowości kończyły się błędem i przestawał sprzedawać nowe miejsca. Teraz łączy się ponownie sam.

Guardian nie sprzedaje też więcej miejsc, niż zmieści jego dysk z danymi, przy około 80 GB na miejsce: 6 miejsc na dysku 512 GB i 12 na dysku 1 TB. Strona Offer pokazuje ten limit w sekcji Seat capacity. Już działające miejsca nie są tym objęte.

Nie ma zmian w konfiguracji, a aktualizacja nie wymaga żadnych dodatkowych czynności.

Commit obrazu: 87c5ca2f9fecbe8943662e1f96cd19a1eb6f8b48. Fedimint: 0.12.0-fedi28.`,
    fr_FR: `Cette version corrige un problème qui pouvait faire perdre au guardian sa connexion au relais, et le laisser déconnecté jusqu’à son redémarrage. Pendant ce temps, ses vérifications de disponibilité échouaient et il cessait de vendre de nouvelles places. Il se reconnecte maintenant tout seul.

Le guardian ne vend plus non plus de places au-delà de ce que son disque de données peut contenir, à environ 80 Go par place : 6 places sur un disque de 512 Go et 12 sur un disque de 1 To. La page Offer affiche cette limite sous Seat capacity. Les places déjà en service ne sont pas concernées.

Il n’y a aucun changement de configuration, et vous n’avez rien de particulier à faire pour mettre à jour.

Commit de l’image : 87c5ca2f9fecbe8943662e1f96cd19a1eb6f8b48. Fedimint : 0.12.0-fedi28.`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
