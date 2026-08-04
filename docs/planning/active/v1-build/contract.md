# v1-build "First usable version of the plugin" — contract

## Goal

A version of the plugin usable daily on real projects: installable into Claude
Code, Codex, Cursor, and Gemini CLI from this repository, carrying the
full written discipline — work sizing, worklog, initiative folders,
scannable prose, session protection, foreground delegation.

## Scope — in

- The stem skill (`/stem` entry point) with references for plan,
  research, verify, debug, and handoff.
- Two functional agents (probe, gate) plus Codex variants.
- Per-host hooks: blocking on Claude Code and Codex (manual compaction),
  reminder-grade on Cursor and Gemini — stated honestly everywhere.
- Install paths: skills CLI (`npx skills add`), Claude Code plugin
  manifest, Gemini extension manifest, documented per-host steps.
- Minimal Astro site shell (landing-page design is a later initiative).
- Repository hygiene: CI (lint, skill validation, version-drift
  check), community files, single-source versioning.

## Scope — out

- Any helper CLI or state engine (revisited only if daily use proves
  the instruction layer insufficient).
- Landing-page design and content.
- Publishing: remote creation, marketplace listing, npm packages, tags.
- Permanent naming and visual identity.

## Success criteria

- Skills validate (frontmatter schema, name/dir match, description
  budget) and manifest versions match the single source.
- The site shell builds.
- Manifest versions match the single source.
- The bundle installs into a real project and runs a real task under
  the discipline.

## Approvals

Scope approved 2026-08-04. Material changes reopen this contract.
