import React from 'react';
import PropTypes from 'prop-types';

const Sum = ({ x, y }) => (
  <h3>{`Sum of ${x} and ${y} is ${x + y}`}</h3>
);

Sum.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};

export default Sum;
