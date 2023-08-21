const DEFAULT_NUMBER_VALUE = 0;

export const Sum = (
  { a = DEFAULT_NUMBER_VALUE,
    b = DEFAULT_NUMBER_VALUE },
) => (
  <p>
    {`Sum of ${a} and ${b} is `
      + `${a + b}`}
  </p>
);
