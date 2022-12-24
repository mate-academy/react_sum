import React from 'react';

export const Sum = ({ x = 0, y = 0 }) => (
  <p>
    { `Sum of ${x} and ${y} is ${x + y}` }
  </p>
);
