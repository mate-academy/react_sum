import React from 'react';
import PropTypes from 'prop-types';

const Sum = ({ x, y }) => (
  <p>
    {`Sum of ${x} and ${y} is ${x + y}`}
  </p>
);

Sum.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};

export default Sum;
