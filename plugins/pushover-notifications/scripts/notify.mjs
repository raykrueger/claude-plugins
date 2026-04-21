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
  readConfig(join(process.cwd(), '.claude', 'pushover-notifications.json')) ||
  readConfig(join(homedir(), '.claude', 'pushover-notifications.json'));

if (!config?.token || !config?.user) {
  console.error('ERROR: No token/user configured. Run /pushover-notifications:setup.');
  process.exit(1);
}

const message = process.argv.slice(2).join(' ') || 'Done';

const res = await fetch('https://api.pushover.net/1/messages.json', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ token: config.token, user: config.user, message }),
});

if (!res.ok) {
  console.error(`ERROR: Pushover returned ${res.status}`);
  process.exit(1);
}
