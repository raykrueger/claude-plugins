# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A personal Claude Code plugin marketplace hosted at `github.com/raykrueger/claude-plugins`. Plugins live under `plugins/<name>/` and are installable via:

```
/plugin add-marketplace raykrueger/claude-plugins
/plugin install <plugin-name>@raykrueger
```

## Plugin structure

Each plugin under `plugins/` must have:
- `.claude-plugin/plugin.json` — name, description, author metadata
- `skills/<skill-name>/SKILL.md` — user-invoked commands (`/plugin-name:skill-name`) or model-invoked skills
- `scripts/` — supporting scripts called from skills via `${CLAUDE_PLUGIN_ROOT}/scripts/`

Skills reference scripts using `${CLAUDE_PLUGIN_ROOT}` so paths resolve correctly after install.

## discord-notifications plugin

Two skills:
- `skills/notify/SKILL.md` — `/notify` command; calls `node ${CLAUDE_PLUGIN_ROOT}/scripts/notify.mjs "<message>"`
- `skills/setup/SKILL.md` — `/discord-notifications:setup` command; prompts for webhook URL, writes `~/.claude/discord-notifications.local.md`

`scripts/notify.mjs` reads the webhook from `~/.claude/discord-notifications.local.md` (frontmatter field `webhook:`) then falls back to `DISCORD_WEBHOOK` env var. Uses Node.js built-in `fetch` — no npm dependencies.

User config stored at `~/.claude/discord-notifications.local.md` (never in the repo):
```markdown
---
webhook: https://discord.com/api/webhooks/...
---
```

## Adding a new plugin

1. Create `plugins/<name>/` with the structure above
2. Add a row to the table in the root `README.md`
