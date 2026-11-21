// The Keeper's Lamp — for make.fun's "Make the AI judge feel brave"
// (make-the-ai-judge-feel-brave-20261121-0302). Four beats, lit in order,
// written to entry.txt under the output directory. Fully deterministic.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

interface Beat {
  order: number;
  line: string;
}

const beats: Beat[] = [
  {
    order: 1,
    line: "The lighthouse keeper climbs the stairs at dusk, same as always, and lights the lamp for ships he will never meet.",
  },
  {
    order: 2,
    line: "That is courage: a small light, kept faithfully, in the dark.",
  },
  { order: 3, line: "Yours is lit too, and it is enough." },
  { order: 4, line: "Someone is steering by it tonight." },
];

function lightLamp(bs: Beat[]): string {
  const sorted = [...bs].sort((a, b) => a.order - b.order);
  let glow = "";
  for (const b of sorted) {
    glow = glow === "" ? b.line : glow + " " + b.line;
  }
  return glow;
}

const target = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(target, { recursive: true });
writeFileSync(join(target, "entry.txt"), lightLamp(beats), "utf8");
