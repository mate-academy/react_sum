function sum(a, b) {
  return a + b;
}

export const Sum = ({ a = 0, b = 0 }) => (
  <p>{`Sum of ${a} and ${b} is ${sum(a, b)}`}</p>
);
