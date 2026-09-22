# StartOS and the guardian's user lookup need these files in the minimal Nix image.
FROM ghcr.io/fedibtc/manifold-fman:d32c0ef4b0a3b7881f0c98f6cf944a7a349c650d@sha256:f7c501e0f1cd57f14ac9491e97fdca3c3b234cf04e22d0e14293cb2a3a46ab62
COPY assets/etc/ /etc/
