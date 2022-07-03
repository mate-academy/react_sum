import React from 'react';

export const Sum = ({ a: num1 = 0, b: num2 = 0 }) => (
  <p>
    {`Sum of ${num1} and ${num2} is ${num1 + num2}`}
  </p>
);
