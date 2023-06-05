import React from 'react';

export const Sum = ({
  a = 0,
  b = 0,
}) => (
  <p>
    <span>Sum of </span>
    {a}
    <span> and </span>
    {b}
    <span> is </span>
    {a + b}
  </p>
);
