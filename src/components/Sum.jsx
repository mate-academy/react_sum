import React from 'react';

const Sum = ({ a = 0, b = 0 }) => (
  <p>
    `Sum of
    {' '}
    {a}
    {' '}
    and
    {' '}
    {b}
    {' '}
    is
    {' '}
    {b + a}
    `
  </p>
);

export default Sum;
