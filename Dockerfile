# StartOS and the guardian's user lookup need these files in the minimal Nix image.
FROM ghcr.io/fedibtc/manifold-fman:8865f67304c2b558055c9ebc53cc529ad5e812ac@sha256:95731ea275562ce91cbcfdf5fa2a70170e48cf79508abb9b42d21f4f07568c45 AS upstream

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
