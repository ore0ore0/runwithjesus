// Warning-only stable matrix check for Vercel-friendly deploys.
import { readFileSync } from 'node:fs';

const pkg = JSON.parse(readFileSync('./package.json','utf8'));
const allowed = {
  next: '15.5.6',
  'next-auth': '4.24.11'
};

const mismatches = [];
for (const [name, want] of Object.entries(pkg.dependencies || {})) {
  const clean = String(want).replace(/^[~^]/,'');
  if (allowed[name] && clean !== allowed[name]) {
    mismatches.push({ name, want: clean, expected: allowed[name] });
  }
}

if (mismatches.length) {
  console.warn('Version drift from stable matrix (continuing build):\n' + JSON.stringify(mismatches, null, 2));
  process.exitCode = 0;
} else {
  console.log('Dependency versions match the stable deploy matrix.');
}
