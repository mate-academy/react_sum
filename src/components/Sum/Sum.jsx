/* eslint-disable react/no-typos */
import React from 'react';

export const Sum = ({
  a,
  b,
}) => (
  <p>
    {'Sum of '}
    {a}
    {' and '}
    {b}
    {' is '}
    {a + b}
  </p>
);

Sum.defaultProps = {
  a: 0,
  b: 0,
};
