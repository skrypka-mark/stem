# Worklog

One entry per change, newest first. Format: date · type · title, then
By / Why / How / Ref.

## 2026-11-20 · fix · Hooks check the project's own planning folder

By: Claude (Opus 5.5) for Mark Skrypka
Why: a project that keeps its planning docs somewhere other than
`docs/planning/` (Jack uses `docs/stem/`, named in its stem block) was
blocked at the end of every turn. The Stop prompt named `docs/planning`
literally, so its evaluator kept refusing a current record. It also
blocked over unfinished work and running background tasks, which isn't
its job. Mark asked for the rules fixed once, in a small PR.
How: every hook (Claude Code's prompts, Codex, Cursor, Gemini) now
names the folder the stem block points to, `docs/planning/` by
default. The prompts judge only the record and list what never blocks
a turn on its own. SKILL.md says once that `docs/planning/` means that
folder. The hooks README explains it. Version 0.1.1, with a CHANGELOG
entry.
Ref: branch mark/planning-path-hooks.

## 2026-10-21 · fix · Point install paths at the skrypka-mark account

By: Claude (Opus 5.5) for Mark Skrypka
Why: the GitHub account moved from markskrypka back to skrypka-mark.
The old name is now free to register, so anyone who claimed it could
serve their own repo at the install path in the README.
How: replaced markskrypka with skrypka-mark in the plugin and
marketplace manifests, the README install commands, the hooks README,
and the v1-build planning notes.
Ref: this commit.

## 2026-08-05 · feat · V1: the stem skill, agents, hooks, site shell

By: Mark Skrypka
Why: first usable version of the discipline, built to be used daily on
real projects.
How: one skill (`/stem`) carrying work sizing, the worklog, the output
contract, build discipline, session boundaries, and scope borders,
with bundled references for plan, research, verify, debug, and
handoff, and a versioned arrival intro; an on-arrival ritual that
reads the managed agent-file block, the planning docs, and the
repository itself, keeps the planning folders housekept, and questions
unexplained working-tree changes; probe and gate agents (foreground,
session-model inheritance, self-scaling research depth) plus Codex
variants; per-host session protection — blocking on Claude Code and
Codex, reminder-grade on Cursor and Gemini; Claude Code plugin and
marketplace manifests; the repository doubles as a Gemini extension; a
minimal Astro shell for stem.cooking; CI with skill-integrity and
version-drift checks.
Ref: the first commit of this repository.
