// The Battery's Last Text to Its Charger
// One line of plain text (max 200 chars): the phone battery's final
// message to the charger it waited for all day.
// The program writes the line to /output/entry.txt and prints it.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I held on all day just to die the second your bank code arrived. The money is safe. I am not. Goodbye.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(line);
