import React from 'react';

export const Sum = ({ a, b }) => (
  <p className="sum__field">
    {`Sum of ${a} and ${b} is ${a + b}`}
  </p>
);

Sum.defaulProps = {
  a: 0,
  b: 0,
};
