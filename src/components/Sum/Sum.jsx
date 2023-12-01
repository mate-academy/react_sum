/* eslint-disable react/jsx-one-expression-per-line */
export default function Sum({ a, b }) {
  let x = a;
  let y = b;

  if (a === undefined) {
    x = 0;
  }

  if (b === undefined) {
    y = 0;
  }

  return (
    <p>
      Sum of {x} and {y} is {x + y}
    </p>
  );
}
