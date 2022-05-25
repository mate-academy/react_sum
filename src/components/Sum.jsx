import React from 'react';

export const Sum = ({ a, b }) => (
  <p>
    {`Sum of ${a || 0} and ${b || 0} is ${(a || 0) + (b || 0)}`}
  </p>
);
