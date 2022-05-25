import React from 'react';

export const Sum = ({ a = 0, b = 0 }) => (
  <p className="paragraph">
    {`Sum of ${b} and ${a} is ${a + b}`}
  </p>
);
