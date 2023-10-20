const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export function randomAlphabet(str: string): string {
  return  str === " " ? " " : alphabets[Math.floor(Math.random() * alphabets.length)];
}

export function randString(str: string): string {
  return str
    .split("")
    .map((str) =>  randomAlphabet(str))
    .join("");
}
