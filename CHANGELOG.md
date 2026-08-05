# Changelog

Release notes for distributed versions. The per-change journal lives in
`docs/planning/worklog.md` — this file records what users get, version
by version.

## [0.1.0] — 2026-08-05

First buildable version.

- The stem skill — invoked as `/stem` — carrying work sizing, the
  worklog, the output contract, and session boundaries, with bundled
  references for planning, research, verification, debugging, and
  handoff.
- Two foreground agents inheriting the session's model: probe
  (read-only discovery, web-capable, self-scaling research depth) and
  gate (verifies against intent, runs tests, never edits), with Codex
  TOML variants.
- Session continuity: a managed, fixed-size state block in the
  project's agent files, an arrival ritual that reads the repository
  (recent commits, working tree, git identity) before working, and
  self-housekeeping planning docs — finished initiatives archive
  automatically.
- Per-host session protection: blocking hooks on Claude Code and Codex
  (manual compaction), reminder-grade on Cursor and Gemini CLI.
- Claude Code plugin + marketplace manifests; the repository doubles as
  a Gemini extension.
- Minimal site shell for stem.cooking.
