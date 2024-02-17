/* eslint-disable react/jsx-one-expression-per-line */

export function Sum({ a = 0, b = 0 }) {
  return (
    <p className="sum">
      Sum of {a} and {b} is {a + b}
    </p>
  );
}

export default Sum;
