---
name: setup
description: Configure the pushover-notifications plugin. Use when the user invokes /pushover-notifications:setup, asks to "configure pushover notifications", "set pushover token", or "set up pushover".
argument-hint: []
allowed-tools: [Bash, Read, Write]
---

Configure the pushover-notifications plugin by saving the app token and user key to a config file.

The script checks for config in order:
1. `.claude/pushover-notifications.json` in the current project directory
2. `~/.claude/pushover-notifications.json` (user-level fallback)

By default, write to the user-level config unless the user asks for project-specific config.

## Steps

1. Ask the user for their Pushover app API token:
   > What is your Pushover application API token?
   
   (They can find this at pushover.net under **Your Applications**. If they don't have an app, they need to create one.)

2. Ask the user for their Pushover user key:
   > What is your Pushover user key?
   
   (Found at the top of their pushover.net dashboard.)

3. Write to the appropriate config file:

```json
{
  "token": "<app-token>",
  "user": "<user-key>"
}
```

4. Test by running:
```bash
node "${CLAUDE_PLUGIN_ROOT}/scripts/notify.mjs" "✅ pushover-notifications plugin configured"
```

5. Confirm success to the user. Remind them that `/notify` is now ready to use.
