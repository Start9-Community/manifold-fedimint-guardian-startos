import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.19:0',
  releaseNotes: {
    en_US: `Each guardian seat now writes much less to disk, which makes your SSD last longer. Fedimint 0.12.0-fedi30 saves each consensus round's data in one write instead of one write per message, and it reuses its log files instead of creating new ones. Running seats keep working with guardians on older versions, and nothing about your data changes.

The guardian also trusts the new production PeerBadge issuer.

This version needs a recent Bitcoin package (Bitcoin Core 28.4:42, 29.5:4, 30.4:4 or 31.2:4, or Knots 29.3:33). With an older one, the guardian waits and asks you to update Bitcoin.

There are no configuration changes, and you do not need to do anything special to update.

Image commit: 46eac0df8013c272ba032ee96ea2376b8f2910c3. Fedimint: 0.12.0-fedi30.`,
    es_ES: `Cada puesto de guardian escribe ahora mucho menos en el disco, lo que alarga la vida de tu SSD. Fedimint 0.12.0-fedi30 guarda los datos de cada ronda de consenso en una sola escritura en lugar de una por mensaje, y reutiliza sus archivos de registro en lugar de crear otros nuevos. Los puestos en marcha siguen funcionando con guardians en versiones anteriores, y tus datos no cambian.

El guardian también confía en el nuevo emisor de PeerBadge de producción.

Esta versión necesita un paquete de Bitcoin reciente (Bitcoin Core 28.4:42, 29.5:4, 30.4:4 o 31.2:4, o Knots 29.3:33). Con uno más antiguo, el guardian espera y te pide que actualices Bitcoin.

No hay cambios de configuración y no necesitas hacer nada especial para actualizar.

Commit de la imagen: 46eac0df8013c272ba032ee96ea2376b8f2910c3. Fedimint: 0.12.0-fedi30.`,
    de_DE: `Jeder Guardian-Platz schreibt jetzt viel weniger auf die Festplatte, was die Lebensdauer deiner SSD verlängert. Fedimint 0.12.0-fedi30 speichert die Daten jeder Konsensrunde in einem einzigen Schreibvorgang statt einem pro Nachricht und verwendet seine Logdateien wieder, statt neue anzulegen. Laufende Plätze arbeiten weiter mit Guardians auf älteren Versionen zusammen, und an deinen Daten ändert sich nichts.

Der Guardian vertraut außerdem dem neuen PeerBadge-Aussteller für die Produktion.

Diese Version braucht ein aktuelles Bitcoin-Paket (Bitcoin Core 28.4:42, 29.5:4, 30.4:4 oder 31.2:4, oder Knots 29.3:33). Mit einem älteren wartet der Guardian und bittet dich, Bitcoin zu aktualisieren.

Es gibt keine Konfigurationsänderungen, und für das Update musst du nichts Besonderes tun.

Image-Commit: 46eac0df8013c272ba032ee96ea2376b8f2910c3. Fedimint: 0.12.0-fedi30.`,
    pl_PL: `Każde miejsce guardiana zapisuje teraz na dysk znacznie mniej, co wydłuża życie Twojego dysku SSD. Fedimint 0.12.0-fedi30 zapisuje dane każdej rundy konsensusu jednym zapisem zamiast jednego na wiadomość i ponownie używa swoich plików dziennika zamiast tworzyć nowe. Działające miejsca nadal współpracują z guardianami w starszych wersjach, a Twoje dane się nie zmieniają.

Guardian ufa też nowemu produkcyjnemu wystawcy PeerBadge.

Ta wersja wymaga aktualnego pakietu Bitcoin (Bitcoin Core 28.4:42, 29.5:4, 30.4:4 lub 31.2:4 albo Knots 29.3:33). Ze starszym guardian czeka i prosi o aktualizację Bitcoina.

Nie ma zmian w konfiguracji, a aktualizacja nie wymaga żadnych dodatkowych czynności.

Commit obrazu: 46eac0df8013c272ba032ee96ea2376b8f2910c3. Fedimint: 0.12.0-fedi30.`,
    fr_FR: `Chaque place de guardian écrit désormais beaucoup moins sur le disque, ce qui prolonge la durée de vie de votre SSD. Fedimint 0.12.0-fedi30 enregistre les données de chaque tour de consensus en une seule écriture au lieu d’une par message, et réutilise ses fichiers journaux au lieu d’en créer de nouveaux. Les places en service continuent de fonctionner avec des guardians sur des versions plus anciennes, et vos données ne changent pas.

Le guardian fait aussi confiance au nouvel émetteur PeerBadge de production.

Cette version nécessite un paquet Bitcoin récent (Bitcoin Core 28.4:42, 29.5:4, 30.4:4 ou 31.2:4, ou Knots 29.3:33). Avec un paquet plus ancien, le guardian attend et vous invite à mettre Bitcoin à jour.

Il n’y a aucun changement de configuration, et vous n’avez rien de particulier à faire pour mettre à jour.

Commit de l’image : 46eac0df8013c272ba032ee96ea2376b8f2910c3. Fedimint : 0.12.0-fedi30.`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
