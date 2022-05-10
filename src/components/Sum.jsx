import React from 'react';
import PropTypes from 'prop-types';

export const Sum = ({
  firstNumber,
  secondNumber,
}) => (
  <p>
    Sum of
    {firstNumber}
    and
    {secondNumber}
    is
    {firstNumber + secondNumber}
  </p>
);

Sum.propTypes = {
  firstNumber: PropTypes.number.isRequired,
  secondNumber: PropTypes.number.isRequired,
};
