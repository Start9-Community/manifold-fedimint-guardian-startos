# StartOS and the guardian's user lookup need these files in the minimal Nix image.
FROM ghcr.io/fedibtc/manifold-fman:05b2d21aa70c0a485574e6b5d2a575a2f8077f6b@sha256:82e36cd528debf4815170846dfd4b983191de8e48cc1739ce6dbf075ca8f197e
COPY assets/etc/ /etc/
