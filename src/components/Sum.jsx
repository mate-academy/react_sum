import { number } from 'prop-types';
import React from 'react';

export const Sum = ({ a = 0, b = 0 }) => (
  <p>
    {`Sum of ${a} and ${b} is ${a + b}`}
  </p>
);

Sum.prototype = {
  a: number,
  b: number,
};
