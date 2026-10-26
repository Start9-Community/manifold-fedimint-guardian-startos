# StartOS and the guardian's user lookup need these files in the minimal Nix image.
FROM ghcr.io/fedibtc/manifold-fman:48b1d53f055f74331d69afa2c2cae33ebc2ced1d@sha256:d278519a8ea04fc06a88c84523f441d6fbb63d19cb9527f3a26dd488702c3de7 AS upstream

# Re-create the image from one filesystem copy. The upstream Nix layers store
# absolute paths (`/nix/...`), and start-cli 2.4.0 refuses those when it packs
# image layers.
FROM scratch
COPY --from=upstream / /
COPY assets/etc/ /etc/
# StartOS mounts proc, sys and dev into the image root and does not create
# them. `docker export`, which start-cli 2.3.0 used, added these directories.
WORKDIR /proc
WORKDIR /sys
WORKDIR /dev
ENV FLEET_MANAGER_DATA_DIR=/data
ENV SSL_CERT_FILE=/etc/ssl/certs/ca-bundle.crt
VOLUME ["/data"]
WORKDIR /data
ENTRYPOINT ["/usr/local/bin/fleet-manager-entrypoint"]
