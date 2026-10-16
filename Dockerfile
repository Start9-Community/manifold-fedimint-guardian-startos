# StartOS and the guardian's user lookup need these files in the minimal Nix image.
FROM ghcr.io/fedibtc/manifold-fman:99d518ffb4c247fd7616783b9f6b20a9dbc1a739@sha256:404c271c89b1b741fa5bd909d36a9c16d1f6ef48b13ebe3c665a2b9e30b0245f
COPY assets/etc/ /etc/
