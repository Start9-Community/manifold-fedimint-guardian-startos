# Updating the upstream image

The Dockerfile pins `ghcr.io/fedibtc/manifold-fman` by source commit and multi-platform image digest. Release notes in `startos/versions/current.ts` identify the source and bundled Fedimint release.

1. Check the production image workflow in `fedibtc/manifold` and review changes since the current source commit.
2. Verify the new image provides both `linux/amd64` and `linux/arm64`. Update the Dockerfile tag and digest together.
3. Update the package version and release notes in every supported locale in `startos/versions/current.ts`. Add a migration only if existing package data requires one.
4. Build both architectures. On StartOS, test a fresh installation, password rotation, an update with existing data, and backup/restore before publishing.
