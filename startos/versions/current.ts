import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.18:1',
  releaseNotes: {
    en_US:
      'With a Bitcoin too old to publish the RPC credential the guardian reads, the guardian no longer fails to start: it waits and tells you to update Bitcoin.',
    es_ES:
      'Con un Bitcoin demasiado antiguo para publicar la credencial RPC que lee el guardian, el guardian ya no falla al iniciarse: espera y te indica que actualices Bitcoin.',
    de_DE:
      'Mit einem Bitcoin, das zu alt ist, um die vom Guardian gelesenen RPC-Zugangsdaten bereitzustellen, startet der Guardian nicht mehr fehlerhaft: Er wartet und fordert dich auf, Bitcoin zu aktualisieren.',
    pl_PL:
      'Gdy Bitcoin jest zbyt stary, by udostępniać dane uwierzytelniające RPC odczytywane przez guardiana, guardian nie kończy już uruchamiania błędem: czeka i prosi o aktualizację Bitcoina.',
    fr_FR:
      "Avec un Bitcoin trop ancien pour publier l'identifiant RPC que lit le guardian, le guardian n'échoue plus au démarrage : il attend et vous invite à mettre Bitcoin à jour.",
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
