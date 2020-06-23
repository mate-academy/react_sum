import PropTypes from 'prop-types';
import React from 'react';

function Sum({ a, b }) {
  return <p>{`Sum of ${a} and ${b} is ${a + b}`}</p>;
}

Sum.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
};

export default Sum;
