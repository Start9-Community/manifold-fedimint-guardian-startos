import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.3:0',
  releaseNotes: {
    en_US: `This release improves guardian reliability.

- Fixed an issue that could make a guardian stop responding until it was restarted.
- Fixed restoring from backup when the same guardian identity had run on two machines.
- Seats waiting for federation setup now show "Awaiting setup" instead of "Unavailable".

No special upgrade steps are required for normal installations.`,
    es_ES: `Esta versión mejora la fiabilidad del guardian.

- Se ha corregido un problema que podía hacer que un guardian dejara de responder hasta reiniciarlo.
- Se ha corregido la restauración desde copia de seguridad cuando la misma identidad de guardian se había ejecutado en dos máquinas.
- Los puestos que esperan la configuración de la federación ahora muestran "Awaiting setup" en lugar de "Unavailable".

Las instalaciones normales no requieren pasos especiales para actualizar.`,
    de_DE: `Diese Version verbessert die Zuverlässigkeit des Guardians.

- Ein Problem wurde behoben, durch das ein Guardian bis zu einem Neustart nicht mehr reagieren konnte.
- Die Wiederherstellung aus einer Sicherung wurde behoben, wenn dieselbe Guardian-Identität auf zwei Rechnern lief.
- Plätze, die auf die Einrichtung der Föderation warten, zeigen jetzt "Awaiting setup" statt "Unavailable".

Für normale Installationen sind keine besonderen Schritte beim Upgrade erforderlich.`,
    pl_PL: `To wydanie poprawia niezawodność guardiana.

- Naprawiono problem, przez który guardian mógł przestać odpowiadać aż do ponownego uruchomienia.
- Naprawiono przywracanie z kopii zapasowej, gdy ta sama tożsamość guardiana działała na dwóch komputerach.
- Miejsca oczekujące na konfigurację federacji pokazują teraz "Awaiting setup" zamiast "Unavailable".

W przypadku standardowych instalacji aktualizacja nie wymaga dodatkowych czynności.`,
    fr_FR: `Cette version améliore la fiabilité du guardian.

- Correction d’un problème qui pouvait empêcher un guardian de répondre jusqu’à son redémarrage.
- Correction de la restauration depuis une sauvegarde lorsque la même identité de guardian avait fonctionné sur deux machines.
- Les sièges en attente de la configuration de la fédération affichent désormais « Awaiting setup » au lieu de « Unavailable ».

Aucune étape particulière n’est nécessaire pour mettre à jour une installation standard.`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
