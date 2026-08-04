# Contributing

Thanks for considering it. This project values small, verified changes
with a written why — the same discipline the plugin ships.

## Ground rules

- Every change appends a `docs/planning/worklog.md` entry: who, why,
  how, commit. Small fix, same rule — the entry is the ceremony.
- Keep pull requests small and single-purpose. State what was asked,
  what changed, and how you verified it.
- `pnpm check` and `pnpm lint` must pass.
- The repository stands alone: no references to other workflow
  products' branding or history — reviewers hold this line.
- Skills are prose products: plain words, short sentences, no filler.
  Match the voice of the existing skills.
- No new dependencies without a written reason in the PR — the plugin
  content has zero and stays that way; tooling stays minimal.
- No telemetry of any kind. This is an invariant, not a preference.

## Setup

See [DEVELOP.md](DEVELOP.md) for layout, scripts, and how validation
works.

## Reporting issues

Use the issue templates. For anything security-relevant, see
[SECURITY.md](SECURITY.md) — never open a public issue for a
vulnerability.
