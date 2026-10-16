# StartOS and the guardian's user lookup need these files in the minimal Nix image.
FROM ghcr.io/fedibtc/manifold-fman:99d518ffb4c247fd7616783b9f6b20a9dbc1a739@sha256:404c271c89b1b741fa5bd909d36a9c16d1f6ef48b13ebe3c665a2b9e30b0245f AS upstream

# Re-create the image from one filesystem copy. The upstream Nix layers store
# absolute paths (`/nix/...`), and start-cli 2.4.0 refuses those when it packs
# image layers. The config below must match the upstream image config.
FROM scratch
COPY --from=upstream / /
COPY assets/etc/ /etc/
ENV FLEET_MANAGER_DATA_DIR=/data
ENV SSL_CERT_FILE=/nix/store/lvak3rg4jmjvy3rxw0w68ylnd0s2r685-nss-cacert-3.123/etc/ssl/certs/ca-bundle.crt
VOLUME ["/data"]
WORKDIR /data
ENTRYPOINT ["/nix/store/vwiiykph2kw894nx7nrh5nd8ga2rsacq-fleet-manager-entrypoint/bin/fleet-manager-entrypoint"]
