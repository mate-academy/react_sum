import React from 'react';
import PropTypes from 'prop-types';

export const Sum = ({ a, b }) => (
  <p>
    {`Sum of ${a} and ${b} is ${a + b}`}
  </p>
);

Sum.proptype = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
};

Sum.defaultProps = {
  a: 0,
  b: 0,
};
