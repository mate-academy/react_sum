/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { number } from 'prop-types';

export function Sum({ a, b }) {
  return (
        // eslint-disable-next-line react/jsx-indent
        <p>Sum of {a} and {b} is {a + b}</p>
  );
}

Sum.propTypes = {
  a: number,
  b: number,
};

Sum.defaultProps = {
  a: 0,
  b: 0,
};
