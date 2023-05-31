import React from 'react';

export const Sum = ({ a = 0, b = 0 }) => (
  <p>
    Sum of&nbsp;
    {a}
    &nbsp;and&nbsp;
    {b}
    &nbsp;is&nbsp;
    {Number(a) + Number(b)}
  </p>
);
