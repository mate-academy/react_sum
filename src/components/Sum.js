import React from 'react';
import propTypes from 'prop-types';

export function Sum({ a, b }) {
  return (
    <p>
      {`Sum of ${a} and ${b} is ${a + b}`}
    </p>
  );
}

Sum.propTypes = {
  a: propTypes.number.isRequired,
  b: propTypes.number.isRequired,
};
