# pushover-notifications

Claude Code plugin — send Pushover notifications from your AI sessions.

Claude automatically infers what to say from context, so you can ask "ping me when done" or "notify me" mid-task without interrupting your workflow. You can also pass an explicit message.

## Installation

**CLI (outside a session):**

```bash
claude plugin marketplace add raykrueger/claude-plugins
claude plugin install pushover-notifications@raykrueger
```

**In-session:**

```
/plugin marketplace add raykrueger/claude-plugins
/plugin install pushover-notifications@raykrueger
/reload-plugins
```

## Setup

After installing, configure your Pushover credentials:

```
/pushover-notifications:setup
```

You will be prompted for your app token and user key. These are saved to `~/.claude/pushover-notifications.json` and are never committed to git.

For project-specific config instead of user-level, ask Claude to save to project scope during setup. The plugin checks `.claude/pushover-notifications.json` in the current project directory first, then falls back to `~/.claude/pushover-notifications.json`.

### Config file format

```json
{
  "token": "<app-api-token>",
  "user": "<user-key>"
}
```

### Getting your Pushover credentials

Pushover requires two credentials: an **app API token** (identifies the sending application) and a **user key** (identifies who receives notifications). You need both.

**Step 1 — Create an application to get your API token:**
1. Log in at [pushover.net](https://pushover.net).
2. Scroll to **Your Applications** and click **Create an Application/API Token**.
3. Fill in a name (e.g. "Claude Code") and any description. Type can be left as "Application".
4. Agree to the terms and click **Create Application**.
5. Copy the **API Token/Key** shown on the next page.

**Step 2 — Find your user key:**
1. Log in at [pushover.net](https://pushover.net).
2. Your user key is shown at the top of the dashboard, labeled **Your User Key**, directly under your name.

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
- "send me a Pushover message when this finishes"

When invoked without a message, Claude infers context from the current task and composes a concise notification automatically.

## Requirements

- Node.js 18+ (bundled with Claude Code)
- No npm dependencies — uses Node.js built-in `fetch` and `fs`

## License

MIT
