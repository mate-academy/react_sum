import React from 'react';

export const Sum = ({ a, b }) => {
  const mount = a + b;

  return (
    <p>{`Sum of ${a} and ${b} is ${mount}`}</p>
  );
};

Sum.defaultProps = {
  a: 0,
  b: 0,
};
