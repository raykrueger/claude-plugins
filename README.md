# raykrueger/claude-plugins

Personal [Claude Code](https://claude.ai/code) plugin marketplace.

## Add this marketplace

**CLI (outside a session):**

```bash
claude plugin marketplace add raykrueger/claude-plugins
```

**In-session:**

```
/plugin marketplace add raykrueger/claude-plugins
```

---

## Plugins

| Plugin | Description | Install |
|--------|-------------|---------|
| [discord-notifications](plugins/discord-notifications/README.md) | Send Discord notifications from Claude Code via webhook | `claude plugin install discord-notifications@raykrueger` |

### Quick install: discord-notifications

**CLI:**

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

Then run `/discord-notifications:setup` to save your webhook URL.

---

## Adding a new plugin

See [CLAUDE.md](CLAUDE.md) for plugin structure and contribution guidelines.
