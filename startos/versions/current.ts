import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.8:1',
  releaseNotes: {
    en_US: `Stops trusting certificates from a compromised certificate authority (eMudhra).

Image commit: 48b1d53f055f74331d69afa2c2cae33ebc2ced1d. Fedimint: 0.12.0-fedi15.`,
    es_ES: `Deja de confiar en los certificados de una autoridad de certificación comprometida (eMudhra).

Commit de la imagen: 48b1d53f055f74331d69afa2c2cae33ebc2ced1d. Fedimint: 0.12.0-fedi15.`,
    de_DE: `Vertraut Zertifikaten einer kompromittierten Zertifizierungsstelle (eMudhra) nicht mehr.

Image-Commit: 48b1d53f055f74331d69afa2c2cae33ebc2ced1d. Fedimint: 0.12.0-fedi15.`,
    pl_PL: `Przestaje ufać certyfikatom przejętego urzędu certyfikacji (eMudhra).

Commit obrazu: 48b1d53f055f74331d69afa2c2cae33ebc2ced1d. Fedimint: 0.12.0-fedi15.`,
    fr_FR: `Ne fait plus confiance aux certificats d'une autorité de certification compromise (eMudhra).

Commit de l’image : 48b1d53f055f74331d69afa2c2cae33ebc2ced1d. Fedimint : 0.12.0-fedi15.`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
