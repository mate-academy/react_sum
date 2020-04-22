import React from 'react';
import PropTypes from 'prop-types';

const Sum = ({ a = 2, b = 1 }) => (
  <h4>{`"Sum of ${a} and ${b} is ${a + b}"`}</h4>
);

Sum.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
};

export default Sum;
