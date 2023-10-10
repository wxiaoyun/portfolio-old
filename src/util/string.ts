const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export function randomAlphabet(): string {
  return alphabets[Math.floor(Math.random() * alphabets.length)];
}

export function randString(str: string): string {
  return str
    .split("")
    .map(() => randomAlphabet())
    .join("");
}
