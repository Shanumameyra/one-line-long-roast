// The Long Roast: Lawmakers and the File They Cannot Convert — make.fun entry.
// Writes this entry's single line to /output/entry.txt.
// Gate: UTF-8 text, 1-320 characters, not only whitespace. This line is 190.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "He will write the laws for artificial intelligence, cryptocurrency, and the entire internet, just as soon as his intern gets back from lunch to show him how to save a Word document as a PDF.";

const candidates = ["/output/entry.txt", "output/entry.txt"];

let wrote = "";
for (const target of candidates) {
  try {
    mkdirSync(dirname(target), { recursive: true });
    writeFileSync(target, LINE, "utf8");
    wrote = target;
    break;
  } catch {
    // /output may not exist outside the grading sandbox; try the next path.
  }
}

if (!wrote) {
  throw new Error("could not write entry.txt to any candidate path");
}

console.log(`wrote ${LINE.length} characters to ${wrote}`);
