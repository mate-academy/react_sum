import React from 'react';
import { number } from 'prop-types';

export const Sum = ({ a, b }) => (
  <p>
    Sum of
    {' '}
    {a}
    {' '}
    and
    {' '}
    {b}
    {' '}
    is
    {' '}
    {a + b}
  </p>
);

Sum.propTypes = {
  a: number.isRequired,
  b: number.isRequired,
};
