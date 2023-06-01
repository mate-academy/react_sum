import React from 'react';

export const Sum = ({ a = 0, b = 0 }) => {
  const content = `Sum of ${a} and ${b} is ${a + b}`;

  return <p>{content}</p>;
};
