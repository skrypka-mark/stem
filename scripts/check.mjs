// Repository checks: the stem skill is intact (frontmatter valid,
// description within the model-invocation budget, every reference file
// present and routed to), and the version in package.json matches every
// manifest. Both failure classes are silent at runtime — hosts load a
// broken skill or a stale version without complaint.
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;
const errors = [];

// Skill integrity
const SKILL_DIR = join(ROOT, 'skills', 'stem');
const REFERENCES = ['plan', 'research', 'verify', 'debug', 'handoff'];
let skill;
try {
  skill = readFileSync(join(SKILL_DIR, 'SKILL.md'), 'utf8');
} catch {
  errors.push('skills/stem/SKILL.md missing');
}
if (skill) {
  const fm = skill.match(/^---\n([\s\S]*?)\n---/);
  if (!fm) {
    errors.push('skills/stem: no frontmatter');
  } else {
    const name = fm[1].match(/^name:\s*(.+)$/m)?.[1]?.trim();
    const desc = fm[1].match(/^description:\s*(.+)$/m)?.[1]?.trim();
    if (name !== 'stem') errors.push(`skills/stem: frontmatter name is "${name}"`);
    if (!desc || desc.length < 20) errors.push('skills/stem: description missing or too short');
    if (desc && desc.length > 1024)
      errors.push(`skills/stem: description over 1024 chars (${desc.length})`);
  }
  for (const ref of REFERENCES) {
    const path = `references/${ref}.md`;
    if (!existsSync(join(SKILL_DIR, path))) errors.push(`skills/stem/${path} missing`);
    if (!skill.includes(path)) errors.push(`SKILL.md does not route to ${path}`);
  }
}

// Version drift
const read = (p) => JSON.parse(readFileSync(join(ROOT, p), 'utf8'));
const version = read('package.json').version;
const manifests = [
  ['.claude-plugin/plugin.json', read('.claude-plugin/plugin.json').version],
  [
    '.claude-plugin/marketplace.json',
    read('.claude-plugin/marketplace.json').plugins?.[0]?.version,
  ],
  ['gemini-extension.json', read('gemini-extension.json').version],
];
for (const [file, v] of manifests) {
  if (v !== version) errors.push(`version drift: ${file} has ${v}, package.json has ${version}`);
}
try {
  const intro = readFileSync(join(SKILL_DIR, 'templates', 'intro.md'), 'utf8');
  const iv = intro.match(/\bv(\d+\.\d+\.\d+)\b/)?.[1];
  if (iv !== version)
    errors.push(`version drift: templates/intro.md shows v${iv}, package.json has ${version}`);
} catch {
  errors.push('skills/stem/templates/intro.md missing');
}

if (errors.length > 0) {
  console.error('check failed:\n' + errors.join('\n'));
  process.exit(1);
}
console.log(`check: stem + ${REFERENCES.length} references ok, version ${version} everywhere`);
