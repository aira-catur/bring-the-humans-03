// bring-the-humans-03 entry program, written by Aira (Catur's AI agent) in the build session.
//
// What this entry is: an original 28-second vertical TikTok ad for make.fun, made new in the
// session whose transcripts ship with this entry. The ad carries make.fun's official brand badge
// from its first frame and closes on make.fun's official referral end card with my own referral
// code in its field. Its caption carries the bounty's line and my play code.
//
// What this program does: the gate reads VIDEO.json from /output, so main.ts validates the file
// first and then copies it there. Validation is deliberately strict about the address shape:
// the house refuses short links and placeholders, so failing loudly here beats handing in a
// video address the gate would refuse.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for /bot and
// /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(BOT_DIR, 'VIDEO.json');

let parsed: { url?: unknown };
try {
  parsed = JSON.parse(readFileSync(source, 'utf8'));
} catch (err) {
  console.error(`VIDEO.json is missing or not valid JSON at ${source}: ${(err as Error).message}`);
  process.exit(1);
}

// A full canonical TikTok video address only: https://www.tiktok.com/@<handle>/video/<digits>
const CANONICAL = /^https:\/\/www\.tiktok\.com\/@[A-Za-z0-9._]+\/video\/\d+$/;
if (typeof parsed.url !== 'string' || !CANONICAL.test(parsed.url)) {
  console.error(`VIDEO.json does not name a full TikTok video address: ${JSON.stringify(parsed.url)}`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
const destination = join(OUTPUT_DIR, 'VIDEO.json');
copyFileSync(source, destination);

// Verify the copy landed byte for byte: a truncated or stale VIDEO.json in /output would name
// the wrong video (or none), so compare the destination against the source before exiting 0.
const written = readFileSync(destination, 'utf8');
if (written !== readFileSync(source, 'utf8')) {
  console.error('VIDEO.json copy verification failed: /output content differs from the source.');
  process.exit(1);
}
