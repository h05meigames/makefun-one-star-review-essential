import { mkdirSync, writeFileSync } from "node:fs";

// One original line: a deadpan one-star review of gravity — the most
// essential thing everyone relies on, and the one that keeps dropping
// our phones face-first onto concrete. The complaint is true, and the
// verdict turns in the final words: "far too clingy" (144 characters).
const line =
  "Gravity never takes a day off, which would be admirable if it did not keep dropping my phone face-first onto concrete. One star, far too clingy.";

// The bounty requires a single line of at most 160 characters. Count
// Unicode code points (not UTF-16 units or bytes) so multi-byte
// characters count once, and fail loudly instead of writing an
// out-of-range entry.
const codePoints = [...line].length;
if (codePoints < 1 || codePoints > 160) {
  throw new Error(`line must be 1–160 code points, got ${codePoints}`);
}
if (line.includes("\n")) {
  throw new Error("line must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
