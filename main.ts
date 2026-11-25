// Snooze Button Roast — writes the winning one-liner to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The alarm clock rang at 6 AM on a Saturday, proud as a rooster that never learned the farm closed on weekends.";

// One line, no trailing newline: the gate counts 1-200 UTF-8 chars.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

console.log(`wrote ${LINE.length} chars to /output/entry.txt`);
