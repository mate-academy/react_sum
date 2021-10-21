/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/prop-types */
import React from 'react';

export const Sum = ({
  n1 = 0,
  n2 = 0,
}) => (
  <p>
    Sum of{' '}
    {n1}{' '}
    and{' '}
    {n2}{' '}
    is{' '}
    {n1 + n2}
  </p>
);
