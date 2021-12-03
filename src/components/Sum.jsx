import React from 'react';

export const Calc = ({ a = 0, b = 0 }) => (
  <p>
    {`Sum of ${a} and ${b} is ${a + b}`}
  </p>
);
