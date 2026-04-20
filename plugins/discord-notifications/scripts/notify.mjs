#!/usr/bin/env node
import { readFileSync } from 'fs';
import { homedir } from 'os';
import { join } from 'path';

function readWebhookFromSettings() {
  const settingsPath = join(homedir(), '.claude', 'discord-notifications.local.md');
  try {
    const content = readFileSync(settingsPath, 'utf8');
    const match = content.match(/^---\n([\s\S]*?)\n---/m);
    if (!match) return null;
    const webhookLine = match[1].split('\n').find(l => l.startsWith('webhook:'));
    return webhookLine ? webhookLine.replace(/^webhook:\s*/, '').replace(/^"|"$/g, '') : null;
  } catch {
    return null;
  }
}

const webhook = process.env.DISCORD_WEBHOOK || readWebhookFromSettings();

if (!webhook) {
  console.error('ERROR: No webhook configured. Run /discord-notifications:setup or set DISCORD_WEBHOOK.');
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
