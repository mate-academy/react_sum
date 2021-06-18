import React from 'react';
import PropTypes from 'prop-types';

function Sum({ a, b }) {
  return <div>{`Sum of ${a} and ${b} is ${a + b}`}</div>;
}

Sum.defaultProps = {
  a: 0,
  b: 0,
};

Sum.propTypes = {
  a: PropTypes.number,
  b: PropTypes.number,
};

export default Sum;
