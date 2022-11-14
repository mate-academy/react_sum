import React from 'react';
import PropTypes from 'prop-types';

export const Sum = ({ num1, num2 }) => (
  <p>
    {`Sum of ${num1} and ${num2} is ${num1 + num2}`}
  </p>
);

Sum.proptype = {
  num1: PropTypes.number.isRequired,
  num2: PropTypes.number.isRequired,
};

Sum.defaultProps = {
  num1: 0,
  num2: 0,
};
