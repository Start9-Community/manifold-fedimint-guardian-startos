# StartOS and the guardian's user lookup need these files in the minimal Nix image.
FROM ghcr.io/fedibtc/manifold-fman:3f1bfc6631440fa82b42935f342b63d6e2687b72@sha256:2c41e05da5fad1e693489a14d4bae2f0fab93669937edc3ecf2638e848e2dae3
COPY assets/etc/ /etc/
