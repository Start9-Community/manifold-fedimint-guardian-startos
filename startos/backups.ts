import * as fs from 'fs'
import * as path from 'path'
import { sdk } from './sdk'

const mainVolume = '/media/startos/volumes/main'

// Guardian databases restore from their latest checkpoints. Wallets and the
// fleet database stay in the backup; runtime locks and telemetry logs do not.
export const { createBackup, restoreInit } = sdk.setupBackups(
  async ({ effects }) =>
    sdk.Backups.ofVolumes('main')
      .setOptions({
        exclude: [
          'seats/*/data/database',
          'seats/*/data/database.db.lock',
          'seats/*/safe-events',
          'safe-events',
          'admin.sock',
          'fleet-manager.lock',
        ],
      })
      .setPostRestore(async (effects) => {
        const seatsDir = path.join(mainVolume, 'seats')
        if (!fs.existsSync(seatsDir)) return

        for (const seatNo of fs.readdirSync(seatsDir)) {
          const dataDir = path.join(seatsDir, seatNo, 'data')
          const dbDir = path.join(dataDir, 'database')
          const checkpointsDir = path.join(dataDir, 'db_checkpoints')

          if (fs.existsSync(dbDir) || !fs.existsSync(checkpointsDir)) continue

          const checkpoints = fs.readdirSync(checkpointsDir).sort()
          const latest = checkpoints[checkpoints.length - 1]
          if (!latest) continue

          console.info(
            `Seat ${seatNo}: restoring database from checkpoint ${latest}`,
          )
          fs.cpSync(path.join(checkpointsDir, latest), dbDir, {
            recursive: true,
          })
        }
      }),
)
