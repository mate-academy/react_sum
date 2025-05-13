export function Sum({ a, b }) {
  const numA = a ?? 0;
  const numB = b ?? 0;

  return (
    <p>
      Sum of {numA} and {numB} is {numA + numB}
    </p>
  );
}
