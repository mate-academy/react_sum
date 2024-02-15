export function Sum({ a = 0, b = 0 }) {
  const sum = a + b;
  const message = `Sum of ${a} and ${b} is ${sum}`;

  return (
    <p>{message}</p>
  );
}
