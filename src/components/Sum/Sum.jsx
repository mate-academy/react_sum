import React from 'react';

export const Sum = ({ a = 0, b = 0 }) => {
  const sum = parseInt(a, 10) + parseInt(b, 10);

  return (
    <p>
      Sum of {a} and {b} is {sum}
    </p>
  );
};
