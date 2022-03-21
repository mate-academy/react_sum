import PropTypes from 'prop-types';
import React from 'react';

export function Sum({ a, b }) {
  return (
    <p>
      {`Sum of ${a} and ${b} is ${a + b}`}
    </p>
  );
}

Sum.propsType = {
  a: PropTypes.number,
  b: PropTypes.number,
};
