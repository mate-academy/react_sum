export function Sum({ a = 0, b = 0 }) {
  const sum = +a + +b;

  return `Sum of ${a} and ${b} is ${sum}`;
}
