# StartOS and the guardian's user lookup need these files in the minimal Nix image.
FROM ghcr.io/fedibtc/manifold-fman:5b1967aba99869cee8acc8a34bfebaf472e06ec9@sha256:176e88ccf30050416548a997a2d8ac19e230103d747d062a9276071d5fda79a2 AS upstream

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
