import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.4:0',
  releaseNotes: {
    en_US: `This release lets your guardians host more seats and adds Bitcoin transfers to the Stability Pool.

- Guardians now use about half as much memory per seat. This host now sets its seat limit from its memory, unless you chose a limit above 8.
- This host offers new seats only while it stays online most of the time. Keep it running to keep selling seats.
- Bitcoin transfers in the Stability Pool turn on when every guardian of a federation runs this release. Update soon so your federations can use them.

No special upgrade steps are required for normal installations.`,
    es_ES: `Esta versión permite que tus guardians alojen más puestos y añade transferencias de Bitcoin al Stability Pool.

- Los guardians usan ahora aproximadamente la mitad de memoria por puesto. Este host fija ahora su límite de puestos según su memoria, salvo que hayas elegido un límite mayor que 8.
- Este host solo ofrece nuevos puestos mientras permanezca en línea la mayor parte del tiempo. Mantenlo encendido para seguir vendiendo puestos.
- Las transferencias de Bitcoin en el Stability Pool se activan cuando todos los guardians de una federación ejecutan esta versión. Actualiza pronto para que tus federaciones puedan usarlas.

Las instalaciones normales no requieren pasos especiales para actualizar.`,
    de_DE: `Mit dieser Version können Ihre Guardians mehr Plätze hosten, und der Stability Pool unterstützt Bitcoin-Überweisungen.

- Guardians brauchen jetzt pro Platz etwa halb so viel Speicher. Dieser Host legt sein Platzlimit jetzt anhand seines Speichers fest, außer Sie haben ein Limit über 8 gewählt.
- Dieser Host bietet neue Plätze nur an, solange er die meiste Zeit online ist. Lassen Sie ihn laufen, um weiter Plätze zu verkaufen.
- Bitcoin-Überweisungen im Stability Pool werden aktiv, wenn alle Guardians einer Föderation diese Version ausführen. Aktualisieren Sie bald, damit Ihre Föderationen sie nutzen können.

Für normale Installationen sind keine besonderen Schritte beim Upgrade erforderlich.`,
    pl_PL: `To wydanie pozwala Twoim guardianom obsługiwać więcej miejsc i dodaje przelewy Bitcoin w Stability Pool.

- Guardiany zużywają teraz około połowę mniej pamięci na miejsce. Ten host ustala teraz limit miejsc na podstawie swojej pamięci, chyba że wybrano limit większy niż 8.
- Ten host oferuje nowe miejsca tylko wtedy, gdy przez większość czasu jest online. Nie wyłączaj go, aby dalej sprzedawać miejsca.
- Przelewy Bitcoin w Stability Pool włączają się, gdy wszystkie guardiany federacji działają na tym wydaniu. Zaktualizuj wkrótce, aby Twoje federacje mogły z nich korzystać.

W przypadku standardowych instalacji aktualizacja nie wymaga dodatkowych czynności.`,
    fr_FR: `Cette version permet à vos guardians d’héberger plus de sièges et ajoute les transferts de Bitcoin au Stability Pool.

- Les guardians utilisent désormais environ deux fois moins de mémoire par siège. Cet hôte fixe désormais sa limite de sièges selon sa mémoire, sauf si vous avez choisi une limite supérieure à 8.
- Cet hôte ne propose de nouveaux sièges que s’il reste en ligne la plupart du temps. Laissez-le allumé pour continuer à vendre des sièges.
- Les transferts de Bitcoin dans le Stability Pool s’activent quand tous les guardians d’une fédération utilisent cette version. Mettez à jour rapidement pour que vos fédérations puissent les utiliser.

Aucune étape particulière n’est nécessaire pour mettre à jour une installation standard.`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
