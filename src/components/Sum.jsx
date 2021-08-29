import React from 'react';
import { number } from 'prop-types';

function Sum({ a, b }) {
  return (
    <p>Sum of {a} and {b} is {a + b}</p>
  );
}

Sum.propTypes = {
  a: number,
  b: number
}

Sum.defaultProps = {
  a: 0,
  b: 0
}

export default Sum;
