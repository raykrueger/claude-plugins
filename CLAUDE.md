# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A personal Claude Code plugin marketplace hosted at `github.com/raykrueger/claude-plugins`. Plugins live under `plugins/<name>/` and are installable via:

```bash
claude plugin marketplace add raykrueger/claude-plugins
claude plugin install <plugin-name>@raykrueger
```

## Plugin structure

Each plugin under `plugins/` must have:
- `.claude-plugin/plugin.json` — name, description, author metadata
- `skills/<name>/SKILL.md` — user-invoked slash commands (`/plugin-name:name`); use this format for typeahead to work
- `scripts/` — supporting scripts called from skills via `${CLAUDE_PLUGIN_ROOT}/scripts/`

Skills reference scripts using `${CLAUDE_PLUGIN_ROOT}` so paths resolve correctly after install.

## discord-notifications plugin

Two skills:
- `skills/notify/SKILL.md` — `/notify` command; calls `node ${CLAUDE_PLUGIN_ROOT}/scripts/notify.mjs "<message>"`
- `skills/setup/SKILL.md` — `/discord-notifications:setup` command; prompts for webhook URL, writes `~/.claude/discord-notifications.json`

`scripts/notify.mjs` reads the webhook from `~/.claude/discord-notifications.json`. Uses Node.js built-in `fetch` — no npm dependencies.

User config stored at `~/.claude/discord-notifications.json` (never in the repo):
```json
{
  "webhook": "https://discord.com/api/webhooks/..."
}
```

## Git

Never commit or push without explicit user confirmation.

## Adding a new plugin

1. Create `plugins/<name>/` with the structure above
2. Add a row to the table in the root `README.md`
3. Add an entry to `.claude-plugin/marketplace.json`
