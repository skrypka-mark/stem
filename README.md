# stem.cooking

Engineering discipline for coding agents. Plan first, build clean, keep
every change on the record — and never lose a session.

Coding agents are strong builders and weak engineers: work starts
without sizing, decisions evaporate with the chat, sessions die with
the context window, and output floods you with prose you have to read
line by line. stem.cooking is a small, installable discipline that
fixes exactly that — as plain instructions your agent follows, not a
framework you operate.

## What's included

- **One skill: `/stem`.** It sizes every task (Quick / Standard /
  Initiative / High-stakes), enforces the worklog, keeps responses
  short and scannable, and goes deeper on demand through its bundled
  references: plan (initiative folders with contract, work, decisions),
  research (timeboxed probes with sources and a recommendation), verify
  (done means checked against what was asked), debug (reproduce,
  root-cause, regression test), handoff (any fresh session continues
  from files alone).
- **Two agents.** `probe` (read-only discovery, web-capable, sources
  required — research depth scales itself, one probe or several in
  parallel, without being asked) and `gate` (checks finished work
  against what was asked, runs tests, never edits). Both run in the
  foreground, return summaries not transcripts, and inherit the
  session's model.
- **Session protection.** Every change lands in
  `docs/planning/worklog.md` as it happens — who, why, how, commit —
  so compaction never costs a phase of work. Hooks add a second layer
  where hosts allow one: blocking on Claude Code and Codex,
  reminder-grade on Cursor and Gemini CLI (see `hooks/README.md` for
  the honest per-host guarantees).

## Install

```sh
npx skills add markskrypka/stem
```

installs the skill into every agent it detects (project scope by
default, `-g` for global; on Windows without Developer Mode add
`--copy`). Then type **`/stem`** (Claude Code, Cursor, and — via the
extension — Gemini CLI; **`$stem`** in Codex). That's the whole setup.

On arrival it reads the room before touching anything: recent commits,
the working tree, the planning docs, your git name — and if
uncommitted changes exist that no log explains, it asks whose they are
instead of walking past. On first run it plants its managed block into
the project's agent file: the always-on pointer plus a single
current-state line, held between markers, regenerated in place as work
moves, hard-bounded so it can never bloat. From then on every session
starts already knowing where you left off — `/stem` right after a
compaction resumes mid-thought. No manual setup, ever; the skill also
activates by description when your agent recognizes the work.

Per-host extras, each optional:

- **Claude Code** — hooks: merge `hooks/claude-code.hooks.json` into
  `.claude/settings.json`. Agents: copy `agents/*.md` to
  `.claude/agents/`.
- **Cursor** — reads `.claude/agents/` and the skills directly; hooks:
  commit `hooks/cursor.hooks.json` as `.cursor/hooks.json`.
- **Codex** — agents: copy `hosts/codex/agents/*.toml` to
  `.codex/agents/`; hooks: copy `hooks/codex.hooks.json` to
  `~/.codex/hooks.json` and approve once via `/hooks`.
- **Gemini CLI** — one command carries skills and hooks together:
  `gemini extensions install https://github.com/markskrypka/stem`.

## What using it feels like

Nothing to operate. You talk to your agent the way you already do; the
discipline sizes each request and applies exactly as much process as it
deserves.

Say "fix the login redirect bug" and the agent answers "Quick fix —
doing it directly," fixes it, tests it, writes the worklog entry, and
asks whether to commit. Say "build the checkout flow" and it answers
"this spans sessions — opening an initiative," asks only the questions
that actually matter, gets your explicit yes on scope, and keeps
`docs/planning/active/checkout-flow/work.md` current while it builds.
Bugs route through reproduce-first debugging, unknowns through
timeboxed research with sources, and nothing meaningful gets called
done before it is checked against what you asked for.

Your entire interface: answer scope questions when work is big, say
yes or no to commit offers, and read `docs/planning/` whenever you want
the state of the world. Overrides always win — "plan it" forces an
initiative, "just do it" skips one — and every skill can be invoked
directly where your agent app supports it.

When a session dies, nothing goes with it: the next session — tomorrow,
another machine, a different agent app — reads `docs/planning/` and
continues from the exact next action.

## The paper trail

Everything the discipline writes lives in your repository under
`docs/planning/` — committed like code, readable by humans, and enough
on its own for any fresh session to state the goal, the status, the
decisions, and the exact next action. The folder keeps itself honest:
finished initiatives move to the archive automatically, stale statuses
get refreshed on arrival, and duplicates get flagged — while your
`CLAUDE.md`/`AGENTS.md` carries only the discipline's managed block, a
pointer plus one state line that is replaced in place as work moves,
never appended to. Bloat is structurally impossible on both surfaces. This repository runs under its
own discipline: see [docs/planning/](docs/planning/) for the live
example, starting with its own build.

## Principles

No telemetry — the plugin makes no network calls of its own, ever.
No personas — plain language, real engineering vocabulary, your
authority at every consequential decision. Honest capability claims —
where a host cannot enforce something, the docs say so instead of
pretending.

## License

Apache-2.0. See [LICENSE](LICENSE).
