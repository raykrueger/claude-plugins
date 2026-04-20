#!/usr/bin/env node
import { readFileSync } from 'fs';
import { homedir } from 'os';
import { join } from 'path';

function readWebhookFromConfig() {
  const configPath = join(homedir(), '.claude', 'discord-notifications.json');
  try {
    const config = JSON.parse(readFileSync(configPath, 'utf8'));
    return config.webhook || null;
  } catch {
    return null;
  }
}

const webhook = readWebhookFromConfig();

if (!webhook) {
  console.error('ERROR: No webhook configured. Run /discord-notifications:setup.');
  process.exit(1);
}

const message = process.argv.slice(2).join(' ') || 'Done';

const res = await fetch(webhook, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ content: message }),
});

if (!res.ok) {
  console.error(`ERROR: Discord returned ${res.status}`);
  process.exit(1);
}
