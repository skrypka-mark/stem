# v1-build — decisions

## 2026-08-05 · Planning docs stay visible at docs/planning/; collisions get asked

A hidden dot-folder was considered and rejected: default search
tooling — including what coding agents grep with — skips hidden
directories, so the discipline could fail to find its own state; the
docs are written for humans (pull requests, project history) and a
dot-folder reads as machine config; and a brand-named path would
couple every user's persisted state to a brand that is deliberately
reversible. The real risk is narrower — a project that already has its
own `docs/planning/` — and it is handled as a protocol, not a
relocation: first run never adopts a foreign folder silently, asks
where the planning docs should live, and records the chosen path in
the managed block so every future session knows.

## 2026-08-04 · One skill with references, /stem as the entry point

The bundle is a single skill named stem — SKILL.md carries the working
rules; five reference files (plan, research, verify, debug, handoff)
load on demand. Why: install-then-`/stem` works in any project with
zero further setup; a single name stays collision-free in the shared
skill namespace where generic names (core, plan, verify) would not;
and one skill costs one description slot of session context instead of
six. Gemini CLI gets `/stem` through the extension's
`commands/stem.toml`. Watch item: the Claude Code plugin loader also
scans `commands/` — it expects markdown there and should ignore the
TOML file; confirm on first plugin install.

## 2026-08-04 · The skill declares its own read permission

Reference files can live outside the project workspace (global
installs, plugin cache), where each read would otherwise trigger a
Claude Code approval prompt. The skill frontmatter therefore declares
`allowed-tools: Read(${CLAUDE_SKILL_DIR}/**)` — the documented
mechanism, scoped to nothing beyond the skill's own folder, working on
every install path with zero user setup. Body routes stay relative
(`references/plan.md`) so one file serves all four hosts; the variable
appears only in the Claude-specific frontmatter key, which other hosts
ignore per the Agent Skills convention. Watch item: confirm the other
three hosts tolerate the extra key on first real install.

## 2026-08-04 · Agents named probe and gate; depth self-scales; models inherit

The delegates carry dev-native names whose function is the role: probe
(Kubernetes and network probes — goes out, checks, reports back) and
gate (the CI quality gate — work passes by severity or it does not).
Research depth is the discipline's own call, never the user's chore:
a Scan (one probe) by default, escalating unprompted to Deep (several
probes in parallel, different angles, cross-checked) when the decision
is high-stakes, the question spans alternatives, the facts move fast,
or a Scan returns thin — stated in one line like work sizing. Both
agents inherit the session's model explicitly (`model: inherit`;
Codex inherits by field omission, its documented mechanism) — pinning
delegate models to a cheaper tier silently degrades exactly the work
that most needs judgment.

## 2026-08-05 · Housekeeping is automatic; agent files carry one managed block

Every session begins by orienting — the managed block, the planning
docs, then the repository itself (recent commits, working tree,
branch, git user name) — followed by a silent sweep of docs/planning/:
accepted initiatives still in active/ are archived without asking
(acceptance and archiving are one motion), stale state notes are
refreshed, and overlapping initiatives are flagged with a proposed
merge for the user to decide. Uncommitted changes that no worklog
entry explains are named and questioned, never assumed and never
walked past. Handoff repeats the sweep.

Agent bootstrap files are first-class injected context, so the
discipline maintains exactly one bounded block in them — the always-on
pointer plus a single current-state line — held between markers,
regenerated in place (replaced, never appended), planted automatically
on first run, with nothing outside the markers ever touched. Depth
lives exclusively in docs/planning/; the block makes a fresh session —
including the one right after a compaction — start already oriented.
Bloat is structurally impossible: the block has a fixed size, and
stale state found outside it gets flagged with an offer to relocate
into the planning docs.

## 2026-08-05 · Scope borders: the plan is a ratchet, done has a definition

Plans stay finite through four written mechanisms: the plan only
shrinks toward done and grows only through renewed agreement;
mid-build ideas default out, landing under a Follow-ups heading in
work.md rather than in the plan; unrelated requests mid-initiative are
sized as their own work — small ones run separately with a park note,
big ones open their own initiative folder; and done is the contract's
success criteria verified and accepted, sealed by the archive move —
surviving follow-ups are listed at acceptance for the user to promote
or drop.

## 2026-08-04 · Root causes, not workarounds; the risk lens on the gate

Debugging carries three hard rules: no workarounds while the cause is
findable (an unavoidable one is named, marked in the worklog, and gets
a removal follow-up); stuck investigations escalate unprompted — a
trace brief to the probe agent, or parallel probes on competing
hypotheses; live incidents contain first and analyze after, and a
recurrence means the cause was missed. Planning states explicit
domain-understanding and decomposition rules (pieces with a clear
done, dependencies-first, risk-early); the core skill carries build
discipline (existing patterns, stay in scope, test as you go,
self-review the diff); High-stakes verification briefs the gate with a
risk lens — what is missing that nobody asked for — alongside the
intent lens.

## 2026-08-04 · Hook safety over hook maximalism

Claude Code uses prompt-type hooks — the evaluation decides whether
docs are actually stale, so blocking cannot loop. Codex blocks manual
compaction only: a stateless block on automatic compaction could wedge
a session at the context limit, so the worklog habit covers that path
and the gap is documented. Cursor gets one auto-submitted follow-up
(`loop_limit: 1`); Gemini gets session-start context via the
extension. All hook actions are prompts or readable inline one-liners —
no shipped scripts, because no host provides a stable path from hook
config into skills-installed folders.

## 2026-08-04 · The repository doubles as the Gemini extension

`gemini-extension.json` at the root plus `hooks/hooks.json` means
`gemini extensions install https://github.com/markskrypka/stem`
delivers skills and hooks in one command on that host. The extension
bundles no agents for now: Gemini's agent format needs its own
tool-name mapping and sits behind an experimental flag — deferred
rather than shipped wrong.

## 2026-08-04 · Cleanliness is a reviewed convention, not a build gate

The repository's stand-alone rule — no references to other workflow
products' branding or history — is held by review, stated in AGENTS.md
and CONTRIBUTING.md, rather than by an automated check.
