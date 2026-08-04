# Development

## Layout

```text
skills/stem/              the skill — SKILL.md entry + references/
                          (plan, research, verify, debug, handoff);
                          canonical, no build step
commands/stem.toml        gives Gemini CLI a /stem command via the extension
agents/                   probe, gate (Claude Code + Cursor read these)
hosts/codex/agents/       Codex TOML variants of the same two agents
hooks/                    per-host hook configs + README (hooks/hooks.json
                          doubles as the Gemini extension's hooks)
.claude-plugin/           Claude Code plugin + marketplace manifests
gemini-extension.json     makes this repository a Gemini extension
apps/site/                stem.cooking site (Astro; landing page is a
                          later initiative)
docs/planning/            this repository's own planning docs (dogfood)
scripts/                  zero-dependency validation (Node)
```

## Scripts

- `pnpm check` — `scripts/check.mjs`, one file, two jobs: the stem
  skill is intact (valid frontmatter, description within budget, every
  reference file present and routed to from SKILL.md), and the version
  in `package.json` matches all three manifests plus the intro
  template's version line. Both failure classes are silent at runtime,
  which is why they are checked here.
- `pnpm lint` — markdownlint (tuned for prose-heavy skill markdown).
- `pnpm format` / `pnpm format:check` — prettier.
- `pnpm build` — builds `apps/site`.

## Versioning and release

Bump the version in `package.json` only, then run `pnpm check` — it
fails until the three manifests agree. Every distributed version gets a
CHANGELOG entry and a Git tag. `CHANGELOG.md` is release notes;
`docs/planning/worklog.md` is the per-change journal — they are
different documents on purpose.

## Pre-commit

Husky runs lint-staged (markdownlint + prettier). Hooks activate once
the repository has been initialized with Git.
