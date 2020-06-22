import PropTypes from 'prop-types';
import React from 'react';

function Sum({ a, b }) {
  const result = `
    Sum of ${a} and ${b} is ${a + b}
  `;

  return <p>{result}</p>;
}

Sum.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
};

export default Sum;
