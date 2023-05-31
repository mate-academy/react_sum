import React from 'react';

export const Sum = ({ a, b }) => {
  const content = `Sum of ${a} and ${b} is ${a + b}`;

  return <p>{content}</p>;
};

Sum.defaultProps = {
  a: 0,
  b: 0,
};
