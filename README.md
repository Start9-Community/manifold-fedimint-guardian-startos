<p align="center">
  <img src="icon.svg" alt="Manifold Fedimint Guardian Logo" width="21%">
</p>

# Manifold Fedimint Guardian on StartOS

> Everything not listed here behaves as upstream Manifold Fedimint Guardian documents.
> See the Documentation section of `instructions.md` for the upstream guide.

## Table of Contents

The sections below describe the package’s runtime and operations.

- [Image and Container Runtime](#image-and-container-runtime)
- [Volume and Data Layout](#volume-and-data-layout)
- [File Models](#file-models)
- [Dependencies](#dependencies)
- [Network Access and Interfaces](#network-access-and-interfaces)
- [Installation and First-Run Flow](#installation-and-first-run-flow)
- [Actions](#actions)
- [Tasks](#tasks)
- [Health Checks](#health-checks)
- [Backups and Restore](#backups-and-restore)
- [Limitations and Differences](#limitations-and-differences)
- [Quick Reference for AI Consumers](#quick-reference-for-ai-consumers)

## Image and Container Runtime

The package wraps `ghcr.io/fedibtc/manifold-fman` for x86_64 and aarch64. The Dockerfile adds account and name-resolution files needed by the minimal upstream image. The `fman-sub` container runs `/bin/fleet-manager serve` in the production environment.

The package sets `SSL_CERT_FILE` to the image’s certificate bundle and `FS_MISTRUST_DISABLE_PERMISSIONS_CHECKS=true` for its embedded Tor client.

## Volume and Data Layout

The `main` volume is mounted at `/data`. It holds the operator identity, fleet database, wallets, guardian seat directories, and dashboard password. Bitcoin’s `main` volume is mounted read-only at `/mnt/bitcoin` to read RPC credentials.

## File Models

`store.json` in the main volume holds `operatorPassword`. The password action creates or replaces that field; unrelated fields survive. At each daemon start, the package writes its value to `.operator-password` with mode `0600`. Editing that password file by hand does not survive a restart.

## Dependencies

Bitcoin is required and must be running. The package resolves its RPC address through StartOS and reads its `.cookie`; it does not modify Bitcoin’s configuration or data. The dependency reports its daemon and sync health. A sync warning does not itself prevent the dashboard from starting. The daemon also receives `https://mempool.space/api` as its Esplora endpoint.

## Network Access and Interfaces

The `ui` interface serves the password-protected operator dashboard over HTTP on internal port 8181, with 8181 as its preferred external port. The `seat-iroh` range forwards external ports 31000–31031 to internal ports 30000–30031 over TCP and UDP for guardian connections and the public API.

## Installation and First-Run Flow

The package requires a dashboard password before it starts. Bitcoin supplies the RPC credentials automatically. The application’s own guardian onboarding remains in the dashboard.

## Actions

Generate a password at first setup or when replacing a lost or compromised password. The action changes `store.json` and returns a masked, copyable password. Changing the watched value restarts a running daemon to apply it, briefly interrupting service. Repeating the action generates another password; it does not recover the previous one.

## Tasks

A missing password raises a critical task that blocks startup. Generating the password clears it. The task returns if the stored password is removed.

## Health Checks

The dashboard readiness check tests whether port 8181 is listening, using the SDK’s default timing. It does not verify federation health or Bitcoin sync. If it stays unready, check the service logs and Bitcoin’s RPC availability.

## Backups and Restore

StartOS copies the main volume while the service is stopped. The backup includes the operator identity, fleet database, wallets, dashboard password, and guardian database checkpoints. It excludes live guardian databases, runtime locks and sockets, and `safe-events` telemetry journals.

After restore, each missing guardian database is copied from that seat’s latest checkpoint, if one exists. Bitcoin remains a separate dependency with its own data and backup. A restored guardian may need to catch up from its checkpoint.

## Limitations and Differences

The package fixes the network and Bitcoin connection settings.

1. It runs on Bitcoin mainnet and uses the local Bitcoin service; there is no action for selecting another network or RPC server.
2. The forwarded range covers the first eight lifetime seat ordinals. Later ordinals use relays unless a package update extends the range.

## Quick Reference for AI Consumers

These identifiers locate the package’s resources and controls.

```yaml
package_id: manifold-fedimint-guardian
image: ghcr.io/fedibtc/manifold-fman
architectures: [x86_64, aarch64]
subcontainers: [fman-sub]
volumes:
  main: /data
file_models: [store.json, .operator-password]
startos_managed_env_vars: [SSL_CERT_FILE, FS_MISTRUST_DISABLE_PERMISSIONS_CHECKS]
dependencies: [bitcoind]
interfaces:
  ui: {type: ui, port: 8181}
  seat-iroh: {internal_ports: 30000-30031, external_ports: 31000-31031, protocols: [tcp, udp]}
actions: [set-dashboard-password]
tasks:
  - {action: set-dashboard-password, severity: critical}
health_checks: [fman]
```
