# v1-build "First usable version of the plugin" — work

State: built and verified — the skill validates, versions match, lint
clean, site builds. Next action (owner-run): initialize Git, push to
the remote, install the bundle into a real project, run the first real
task under the discipline. Blockers: none.

## Plan

- [x] Repository skeleton, license, fresh Astro shell (framework CLI)
- [x] The stem skill authored (SKILL.md + five references, /stem entry)
- [x] Agents: probe, gate (+ Codex TOML variants; inherit session model)
- [x] Hooks: four host files + README with honest guarantees
- [x] Manifests: Claude Code plugin + marketplace, Gemini extension
- [x] Planning docs: this initiative, worklog first entry
- [x] Root files: README, AGENTS/CLAUDE/GEMINI pointers, CONTRIBUTING,
      DEVELOP, SECURITY, CHANGELOG
- [x] Tooling: package.json (single-source version), workspace,
      lint/format configs, husky, validation scripts, CI workflow
- [x] Verification: validation scripts green, lint clean, site builds
- [ ] Owner: git init + push, first real task under the discipline

## Publication notes

- [x] Remote created: github.com/markskrypka/stem; repository URL
      filled in plugin.json, marketplace.json, and the README install
      command.
- [ ] Trademark-register check before any wider announcement.
- [ ] First distributed version gets a tag and a CHANGELOG entry.
