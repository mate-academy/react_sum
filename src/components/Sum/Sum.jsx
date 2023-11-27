// export const Sum = () => ();
export function Sum({ a = 0, b = 0 }) {
  // const sumA = a === 0 ? a : 1;
  // const sumB = b === 0 ? b : 3;

  return (
    <p>{`Sum of ${a} and ${b} is ${a + b}`}</p>
  );
}
