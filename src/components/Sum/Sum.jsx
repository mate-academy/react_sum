import React from 'react';

// Named export for the Sum component
export const Sum = ({ a = 0, b = 0 }) => {
  const result = a + b;

  return (
    <p>
      Sum of {a} and {b} is {result}
    </p>
  );
};
