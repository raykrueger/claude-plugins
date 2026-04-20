---
name: setup
description: Configure the discord-notifications plugin. Use when the user invokes /discord-notifications:setup, asks to "configure discord notifications", "set discord webhook", or "set up notifications".
argument-hint: [webhook-url]
allowed-tools: [Bash, Read, Write]
---

Configure the discord-notifications plugin by saving the webhook URL to `~/.claude/discord-notifications.local.md`.

## Steps

1. If $ARGUMENTS contains a URL, use it as the webhook. Otherwise ask the user:
   > What is your Discord webhook URL?

2. Validate the URL starts with `https://discord.com/api/webhooks/`.

3. Write `~/.claude/discord-notifications.local.md`:

```markdown
---
webhook: <url>
---
```

4. Test the webhook by running:
```bash
node "${CLAUDE_PLUGIN_ROOT}/scripts/notify.mjs" "✅ discord-notifications plugin configured"
```

5. Confirm success to the user. Remind them that `/notify` is now ready to use.
