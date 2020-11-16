import React from 'react';
import PropTypes from 'prop-types';

const Sum = ({ x = 0, y = 0 }) => (
  <p className="Sum">
    {`Sum of ${x} and ${y} is ${x + y}`}
  </p>
);

Sum.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};

export default Sum;
