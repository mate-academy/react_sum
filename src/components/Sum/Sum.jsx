export const Sum = ({
  a = 0,
  b = 0,
  c = a + b,
}) => (
  <p>
    {`Sum of ${a} and ${b} is ${c}`}
  </p>
);
