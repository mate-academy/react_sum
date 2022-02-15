import React from 'react';
import PropTypes from 'prop-types';

export const Sum = ({ a, b }) => (
  <p>
    {`Sum of ${a} and ${b} is ${a + b}`}
  </p>
);

Sum.deafaultProps = {
  a: 0,
  b: 0,
};

Sum.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
};
