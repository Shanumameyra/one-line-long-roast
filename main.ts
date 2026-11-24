import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One sentence only: the lawmaker's authority first, then the file that defeats it.
const roast =
  "The senator drafting the law to govern artificial intelligence just emailed his office a sideways photo of a printed Word document and asked someone to turn it into a PDF.";

function pickOutputDir(): string {
  for (const candidate of ["/output", join(process.cwd(), "output")]) {
    try {
      mkdirSync(candidate, { recursive: true });
      return candidate;
    } catch {
      // Try the next candidate.
    }
  }
  return join(process.cwd(), "output");
}

const dir = pickOutputDir();
const target = join(dir, "entry.txt");
writeFileSync(target, roast + "\n", "utf8");
console.log(`Wrote ${roast.length} chars to ${target}`);
console.log(roast);
