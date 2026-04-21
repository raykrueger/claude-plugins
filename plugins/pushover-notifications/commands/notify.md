---
name: notify
description: Send a Pushover notification to the user. Use this when the user says "ping me", "notify me", "send me a notification", or invokes /notify.
argument-hint: [message]
allowed-tools: [Bash]
---

Send a Pushover notification. Compose a concise message summarizing what just completed or what the user should know, then run:

```bash
node "${CLAUDE_PLUGIN_ROOT}/scripts/notify.mjs" "<message>"
```

Keep the message short and informative — what finished, or what needs attention. No need to ask what to say; infer from context.

Lead with 1-2 emojis that match the context:
- ✅ 🎉 — success, task complete, tests passed
- ❌ 💥 — failure, error, build broken
- ⚠️ 🔍 — warning, needs attention, review required
- 🚀 📦 — deploy, release, publish
- 🔧 🛠️ — fix, patch, refactor
- 📊 📈 — data, analysis, results
- ⏳ 🔄 — still running, waiting, in progress
- 💡 📝 — info, notes, ideas

Multi-line is fine for richer context. First line: emoji + one-liner summary. Optional second line: key detail.

If $ARGUMENTS is provided, use it as the message instead of inferring from context.
