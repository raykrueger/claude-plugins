# discord-notifications

Claude Code plugin — send Discord notifications via webhook.

## Installation

```
/plugin add-marketplace raykrueger/claude-plugins
/plugin install discord-notifications@raykrueger
```

After installing, run the setup command to configure your webhook:

```
/discord-notifications:setup
```

You'll be prompted for your Discord webhook URL. It's saved to `~/.claude/discord-notifications.local.md` (never committed to git).

### Creating a Discord webhook

1. Open Discord and go to the channel you want notifications sent to
2. Click **Edit Channel** (gear icon) → **Integrations** → **Webhooks**
3. Click **New Webhook**, give it a name, and click **Copy Webhook URL**
4. Paste that URL when prompted by `/discord-notifications:setup`

## Usage

Invoke from Claude Code:

```
/notify
/notify Build complete
```

Or tell Claude: "ping me when done", "notify me", "send me a notification".

## Manual setup (optional)

If you prefer, set `DISCORD_WEBHOOK` in your shell profile instead of using the setup command:

```bash
export DISCORD_WEBHOOK="https://discord.com/api/webhooks/YOUR_WEBHOOK_URL"
```

The script checks the settings file first, then falls back to the env var.

## Requirements

- Node.js 18+ (guaranteed if Claude Code is installed)
