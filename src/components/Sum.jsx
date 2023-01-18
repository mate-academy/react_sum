import React from 'react';

export const Sum = ({ a, b }) => {
  const res = `Sum of ${a} and ${b} is ${a + b}`;

  return (
    <p>
      {res}
    </p>
  );
};

Sum.defaultProps = {
  a: 0,
  b: 0,
};
