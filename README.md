# raykrueger/claude-plugins

Personal Claude Code plugin marketplace.

## Add this marketplace

### CLI

```bash
claude plugin marketplace add raykrueger/claude-plugins
```

### In-session

```
/plugin marketplace add raykrueger/claude-plugins
```

---

## Plugins

### discord-notifications

Send Discord notifications from Claude Code via webhook.

```bash
claude plugin install discord-notifications@raykrueger
```

```
/plugin install discord-notifications@raykrueger
/reload-plugins
```

After installing, configure your webhook:

```
/discord-notifications:setup
```

[Full documentation](plugins/discord-notifications/README.md)
