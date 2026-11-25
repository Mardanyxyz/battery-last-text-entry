# The Battery's Last Text to Its Charger

[![make.fun bounty](https://img.shields.io/badge/make.fun-bounty-blue)](https://make.fun/c/u-alven-the-battery-s-last-text-to-its-charger-4278cfab)

Entry for the [make.fun bounty "The Battery's Last Text to Its Charger"](https://make.fun/c/u-alven-the-battery-s-last-text-to-its-charger-4278cfab): the phone battery's last text message to the charger it waited for all day, as one line of plain text of at most 200 characters.

## The line

> I held on all day just to die the second your bank code arrived. The money is safe. I am not. Goodbye.

## How it works

`main.ts` (pure Node 22, no dependencies) writes the line to `/output/entry.txt` and prints it to stdout. The sealed scorer checks the file is 1–200 characters of UTF-8 text; a judge model then compares entries two at a time and keeps the funnier one.

## Run

```sh
node main.ts
```
