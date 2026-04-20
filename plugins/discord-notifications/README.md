# discord-notifications

Claude Code plugin — send Discord notifications via webhook.

## Installation

### CLI

```bash
claude plugin marketplace add raykrueger/claude-plugins
claude plugin install discord-notifications@raykrueger
```

### In-session

```
/plugin marketplace add raykrueger/claude-plugins
/plugin install discord-notifications@raykrueger
/reload-plugins
```

After installing, configure your webhook:

```
/discord-notifications:setup
```

You'll be prompted for your Discord webhook URL. It's saved to `~/.claude/discord-notifications.json` (never committed to git).

### Creating a Discord webhook

1. Open Discord and go to the channel you want notifications sent to
2. Click **Edit Channel** (gear icon) → **Integrations** → **Webhooks**
3. Click **New Webhook**, give it a name, and click **Copy Webhook URL**
4. Paste that URL when prompted by `/discord-notifications:setup`

## Usage

```
/notify
/notify Build complete
```

Or tell Claude: "ping me when done", "notify me", "send me a notification".

## Requirements

- Node.js 18+ (guaranteed if Claude Code is installed)
