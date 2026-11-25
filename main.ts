// Entry for make.fun's "The Funniest Honest Appliance Error" bounty.
//
// The entry is one line of at most 200 characters: an error message an
// appliance could plausibly show when it fails, funny because the fault is
// real. Mine is a washing machine that has been quietly running a two-sock
// economy between its drum and its filter. This program writes that single
// line to entry.txt in the output directory and does nothing else.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Cycle paused: one sock in the drum, one in the filter. I don't lose them — I run a two-sock economy, and you keep auditing only one side of it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
