// Funniest Forecast for a City That Isn't
// Writes one funny weather forecast line (max 120 chars) for an invented
// city to /output/entry.txt. Node.js stdlib only.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "Tonight in Snizzlewick: rain falls sideways out of spite, winds of mild regret, 90% chance the mayor sues the clouds.";

const outPath = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} chars to ${outPath}`);
