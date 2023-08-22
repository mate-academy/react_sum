const DEFAULT_VALUE = 0;

export const Sum = ({
  a = DEFAULT_VALUE,
  b = DEFAULT_VALUE,
}) => (
  <p>
    {`Sum of ${a} and ${b} is ${a + b}`}
  </p>
);
