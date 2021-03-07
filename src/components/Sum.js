import React from 'react';

// eslint-disable-next-line react/prop-types
const Sum = ({ a, b }) => (
  <p>
    Sum of
    {a}
    {' '}
    and
    {b}
    {' '}
    is
    {a + b}
  </p>
);

export default Sum;
