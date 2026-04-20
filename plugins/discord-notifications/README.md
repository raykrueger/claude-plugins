# discord-notifications

Claude Code plugin — send Discord notifications via webhook.

Claude automatically infers what to say from context, so you can ask "ping me when done" or "notify me" mid-task without interrupting your workflow. You can also pass an explicit message.

## Installation

**CLI (outside a session):**

```bash
claude plugin marketplace add raykrueger/claude-plugins
claude plugin install discord-notifications@raykrueger
```

**In-session:**

```
/plugin marketplace add raykrueger/claude-plugins
/plugin install discord-notifications@raykrueger
/reload-plugins
```

## Setup

After installing, configure your Discord webhook:

```
/discord-notifications:setup
```

You will be prompted for your webhook URL. The URL is saved to `~/.claude/discord-notifications.json` and is never committed to git.

For project-specific config instead of user-level, ask Claude to save to project scope during setup. The plugin checks `.claude/discord-notifications.json` in the current project directory first, then falls back to `~/.claude/discord-notifications.json`.

### Config file format

```json
{
  "webhook": "https://discord.com/api/webhooks/..."
}
```

### Creating a Discord webhook

1. Open Discord and go to the channel where you want notifications sent.
2. Click **Edit Channel** (gear icon) → **Integrations** → **Webhooks**.
3. Click **New Webhook**, give it a name, and click **Copy Webhook URL**.
4. Paste that URL when prompted by `/discord-notifications:setup`.

## Usage

```
/notify
/notify Build complete
/notify Tests failed on main
```

You can also use natural language mid-task:

- "ping me when done"
- "notify me"
- "send me a notification"
- "send me a Discord message when this finishes"

When invoked without a message, Claude infers context from the current task and composes a concise notification automatically.

## Requirements

- Node.js 18+ (bundled with Claude Code)
- No npm dependencies — uses Node.js built-in `fetch` and `fs`

## License

MIT
