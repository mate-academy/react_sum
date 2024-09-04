// export const Sum = () => ();

import React from 'react';

export const Sum = ({ a, b }) => {
  const aCopy = a !== undefined ? a : 0;
  const bCopy = b !== undefined ? b : 0;
  const result = aCopy + bCopy;

  return (
    <p>
      Sum of {aCopy} and {bCopy} is {result}
    </p>
  );
};
