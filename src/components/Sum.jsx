import React from 'react';

export const Sum = ({ a = 0, b = 0 }) => {
  if (a === undefined && b === undefined) {
    return (
      <p>Sum of 0 and 0 is 0</p>
    );
  }

  const result = a + b;
  const resultLine = `Sum of ${a} and ${b} is ${result}`;

  return (
    <p>{resultLine}</p>
  );
};
