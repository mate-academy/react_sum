import React from 'react';

export const Sum = ({
  a = 0,
  b = 0,
  msg = `Sum of ${a} and ${b} is ${a + b}`,
}) => (
  <>
    <p>
      {msg}
    </p>
  </>
);

export default Sum;
