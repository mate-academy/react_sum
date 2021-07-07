import React from 'react';
import PropTypes from 'prop-types';

const Sum = ({ a, b }) => (
  <h1>{`Sum of ${a} and ${b} is ${a + b}`}</h1>
);

Sum.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
};

export default Sum;
