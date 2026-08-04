# stem.cooking

Engineering discipline for coding agents, shipped as skills. This
repository builds itself under its own rules.

Always work through the stem skill: size the work, keep
`docs/planning/` current, verify before done.

## Commands

- `pnpm install` — install workspace dependencies
- `pnpm check` — validate skills, versions, and the forbidden-terms guard
- `pnpm lint` — markdown lint
- `pnpm build` — build the site shell

## Invariants

- No telemetry, no network calls from the plugin — ever.
- Public copy always says `stem.cooking`, never the bare short name.
- This repository stands alone: no references to other workflow
  products' branding or history, anywhere, by convention.
- `skills/stem/` (one skill plus its references) is canonical; there
  is no build step for plugin content.
- Version lives once in `package.json`; manifests must match
  (`scripts/check-versions.mjs`).
- The repository owner runs Git: never init, commit, or push without
  being asked.

## Current state

Read `docs/planning/worklog.md` (newest first) and
`docs/planning/active/v1-build/work.md` for status and the exact next
action.
