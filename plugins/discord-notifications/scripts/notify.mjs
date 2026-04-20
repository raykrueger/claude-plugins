#!/usr/bin/env node
import { readFileSync } from 'fs';
import { homedir } from 'os';
import { join } from 'path';

function readConfig(path) {
  try {
    return JSON.parse(readFileSync(path, 'utf8'));
  } catch {
    return null;
  }
}

const config =
  readConfig(join(process.cwd(), '.claude', 'discord-notifications.json')) ||
  readConfig(join(homedir(), '.claude', 'discord-notifications.json'));

if (!config?.webhook) {
  console.error('ERROR: No webhook configured. Run /discord-notifications:setup.');
  process.exit(1);
}

const message = process.argv.slice(2).join(' ') || 'Done';

const res = await fetch(config.webhook, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ content: message }),
});

if (!res.ok) {
  console.error(`ERROR: Discord returned ${res.status}`);
  process.exit(1);
}
