import React from 'react';

export const Sum = ({ a = 0, b = 0 }) => {
  // eslint-disable-next-line radix
  const result = parseInt(a) + parseInt(b);

  return (
    <p>
      Sum of {a} and {b} is {result}
    </p>
  );
};
