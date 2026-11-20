# Hooks — per-host session protection

The discipline's real protection is the habit the skills enforce:
planning docs update at every meaningful step, so there is never much
to lose. Hooks add a second layer where each host allows one. The
guarantee is honestly two-tier: **enforced on Claude Code and Codex,
reminder-grade on Cursor and Gemini** — the latter two cannot block
compaction on any surface.

No hook here runs a shipped script or binary. Every action is either a
prompt evaluation or an inline one-liner you can read in full above —
nothing executes that you have not seen.

Every hook checks the project's planning folder: `docs/planning/`, or
the folder the stem block in `CLAUDE.md`, `AGENTS.md` or `GEMINI.md`
names on its "keep <folder> current" line. A project that chose
another path at first run is held to that path, never to
`docs/planning/`. The prompt hooks judge only that record. Unfinished
work, background tasks or a question waiting on the user never block
a turn by themselves.

## Claude Code — `claude-code.hooks.json` (blocking)

Merge into `.claude/settings.json` (project) or `~/.claude/settings.json`
(user). Prompt-type hooks evaluate each situation, so nothing loops:
compaction and end-of-turn are blocked only while planning docs are
actually stale, and allowed once refreshed. Project-scope hooks run
after you accept the workspace-trust dialog.

## Codex — `codex.hooks.json` (blocking, manual compaction)

Copy to `~/.codex/hooks.json` (user) or `<repo>/.codex/hooks.json`
(project), then review and approve once via `/hooks` — Codex records
trust against the hook's hash and re-asks if it ever changes; that is
its security model working. Scope note: this guards manual `/compact`
(refresh docs, then compact again). Automatic compaction is deliberately
not blocked — a stateless block there could wedge a session at the
context limit; the worklog habit covers that path.

## Cursor — `cursor.hooks.json` (reminder)

Commit as `.cursor/hooks.json` in the project. Cursor cannot block
compaction or stopping; this uses the one honest lever it has — when
the agent stops, a follow-up message auto-submits once (`loop_limit: 1`)
asking it to refresh planning docs if the session changed anything.

## Gemini CLI — `hooks.json` (reminder, via extension)

Installed automatically when this repository is added as a Gemini
extension (`gemini extensions install https://github.com/skrypka-mark/stem`):
the discipline is
injected as context at session start. Gemini's pre-compression event is
advisory-only by design, so no blocking is possible; the worklog habit
is the protection.
