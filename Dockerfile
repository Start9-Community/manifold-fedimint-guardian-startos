# StartOS and the guardian's user lookup need these files in the minimal Nix image.
FROM ghcr.io/fedibtc/manifold-fman:48b1d53f055f74331d69afa2c2cae33ebc2ced1d@sha256:d278519a8ea04fc06a88c84523f441d6fbb63d19cb9527f3a26dd488702c3de7 AS upstream

FROM alpine:3.24 AS ca
# The base image's CA store is only as current as its last release.
RUN apk upgrade --no-cache ca-certificates-bundle \
 && if [ -f /etc/ssl/certs/ca-certificates.crt.apk-new ]; then mv /etc/ssl/certs/ca-certificates.crt.apk-new /etc/ssl/certs/ca-certificates.crt; fi \
 && ! grep -q MIICTjCCAdOgAwIBAgIKPPYHqWhwDtqLhDAKBggqhkjOPQQDAzBr /etc/ssl/certs/ca-certificates.crt

# Re-create the image from one filesystem copy. The upstream Nix layers store
# absolute paths (`/nix/...`), and start-cli 2.4.0 refuses those when it packs
# image layers.
FROM scratch
COPY --from=upstream / /
COPY assets/etc/ /etc/
# Upstream's Nix cacert still trusts the eMudhra roots.
COPY --from=ca /etc/ssl/certs/ca-certificates.crt /etc/ssl/certs/ca-certificates.crt
# StartOS mounts proc, sys and dev into the image root and does not create
# them. `docker export`, which start-cli 2.3.0 used, added these directories.
WORKDIR /proc
WORKDIR /sys
WORKDIR /dev
ENV FLEET_MANAGER_DATA_DIR=/data
ENV SSL_CERT_FILE=/etc/ssl/certs/ca-certificates.crt
VOLUME ["/data"]
WORKDIR /data
ENTRYPOINT ["/usr/local/bin/fleet-manager-entrypoint"]
