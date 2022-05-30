/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

export const Sum = ({ a = 0, b = 0 }) => (
  <p>
    Sum of {a} and {b} is {a + b}
  </p>
);
