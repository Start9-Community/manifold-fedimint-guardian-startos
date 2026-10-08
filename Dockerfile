# StartOS and the guardian's user lookup need these files in the minimal Nix image.
FROM ghcr.io/fedibtc/manifold-fman:fc804596e001c7ea94d01b9152d321b9acd10502@sha256:66e59dff93bb1cf40e00a02c52e2d7dd1010b4d25e28dd90549adb37059bf8e4
COPY assets/etc/ /etc/
