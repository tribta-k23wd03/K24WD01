function getUserInput(): string | number {
  return Math.random() > 0.5 ? "TypeScript" : 12345;
}

const input = getUserInput();

const inputLength =
  typeof input === "string" && input.length ? input.length : undefined;

console.log("Input Length (if string):", inputLength);
