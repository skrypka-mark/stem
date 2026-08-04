# Security

## Reporting a vulnerability

Please use GitHub's private vulnerability reporting ("Report a
vulnerability" under the Security tab) once this repository is public.
Do not open a public issue for anything security-relevant.

## What to include

What you found, where (file and line where possible), how to reproduce
it, and what an attacker could do with it.

## Scope notes

The plugin is instruction content plus declarative hook configs: it
ships no binaries, runs no telemetry, and makes no network calls of its
own. Hook actions are prompt evaluations or inline one-liners readable
in `hooks/` in full — if you find a way any of them could execute
something a user has not seen, that is exactly the kind of report we
want.

## Response

Reports get an acknowledgment within a few days and an honest
assessment of severity and timeline. Fixed issues are credited in the
CHANGELOG unless you prefer otherwise.
