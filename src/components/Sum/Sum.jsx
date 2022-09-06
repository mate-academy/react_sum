import React from 'react';
import PropTypes from 'prop-types';

export const Sum = ({ firstValue, secondValue }) => (
  <p>
    {`Sum of ${firstValue} and ${secondValue} is ${firstValue + secondValue}`}
  </p>
);

Sum.defaultProps = {
  firstValue: 0,
  secondValue: 0,
};

Sum.PropTypes = {
  firstValue: PropTypes.number,
  secondValue: PropTypes.number,
};
