import React from 'react';

export const Sum = ({ a = 0, b = 0 }) => (
  <div>
    <p>{`Sum of ${a} and ${b} is ${a + b}`}</p>
  </div>
);
