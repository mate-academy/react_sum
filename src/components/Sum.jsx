import React from 'react';

export const Sum = ({
  a = 0,
  b = 0,
}) => {
  const sumOfNums = a + b;
  const text = `Sum of ${a} and ${b} is ${sumOfNums}`;

  return (
    <p>{ text }</p>
  );
};
