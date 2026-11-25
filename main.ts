// Appliance Error — make.fun entry.
//
// What this does, in one sentence: it writes the entry — a single honest
// error message from a washing machine — to entry.txt in the grader's
// output folder.
//
// The line (72 characters, one line, no trailing newline):
//   ERROR E04: 1 sock in, 0 socks out. This is not a fault. This is the job.
//
// Why this line: every washing machine owner has lost a sock to the wash.
// The laugh comes from the truth of the fault, not a pun bolted on — the
// machine is not malfunctioning, it is confessing. The error-code format
// and the flat denial ("This is not a fault") make it read like a real
// display message, as if the machine wrote it without meaning to be funny.
//
// The grader mounts this repo somewhere else and runs from its own working
// directory, so nothing here may assume a cwd. The destination comes from
// the MAKEFUN_OUTPUT_DIR environment variable, defaulting to /output.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Where the finished entry belongs. The grader sets this; /output is the
// fallback the competition docs name.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The entry itself: one line, 72 code points, well under the 200 cap.
const line =
  "ERROR E04: 1 sock in, 0 socks out. This is not a fault. This is the job.";

// Make sure the destination folder exists before we write into it.
mkdirSync(outputDir, { recursive: true });

// Write exactly the line — no trailing newline, no extra whitespace.
writeFileSync(join(outputDir, "entry.txt"), line, "utf8");

console.log(`Entry written (${[...line].length} characters, no trailing newline)`);
