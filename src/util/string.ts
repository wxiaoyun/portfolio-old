const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export function randomAlphabets(): string {
  return alphabets[Math.floor(Math.random() * alphabets.length)];
}

export function randString(str: string): string {
  return str
    .split("")
    .map(() => randomAlphabets())
    .join("");
}
