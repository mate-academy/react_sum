import React from 'react';
import PropTypes from 'prop-types';

const Sum = ({ a, b }) => (
  <h3>{`Sum of ${a} and ${b} is ${a + b}`}</h3>
);

Sum.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
};

export default Sum;
