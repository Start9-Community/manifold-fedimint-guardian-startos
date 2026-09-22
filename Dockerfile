# StartOS and the guardian's user lookup need these files in the minimal Nix image.
FROM ghcr.io/fedibtc/manifold-fman:0d31e0b738ed91b628194458a99c306356e60327@sha256:415dc8fd17df110ad5c30eb2116dd7fbefbbb2c8f1736cea1773449bc9c843d7
COPY assets/etc/ /etc/
