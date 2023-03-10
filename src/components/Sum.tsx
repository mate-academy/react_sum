import React from 'react';

type Props = {
  a: number | undefined,
  b: number | undefined,
};

export const Sum: React.FC<Props> = ({ a = 0, b = 0 }) => (
  <p>
    {`Sum of ${a} and ${b} is ${a + b}`}
  </p>
);
