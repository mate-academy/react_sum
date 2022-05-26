
import React from 'react';

export const Sum = ({ a, b }) => (
  <p className="sum">
    {`Sum of ${a} and ${b} is ${a + b}`}
  </p>
);

Sum.defaultProps = {
  a: 0,
  b: 0,
};
