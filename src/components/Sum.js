/* eslint-disable react/default-props-match-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const Sum = ({
  firstNumber,
  secondNumber,
}) => (
  <div>
    {`Sum components
    ${firstNumber} and ${secondNumber}
    is ${firstNumber + secondNumber}`}
  </div>
);

Sum.defaultProps = {
  firstNumber: 0,
  secondNumber: 0,
};

Sum.propTypes = {
  firstNumber: PropTypes.number,
  secondNumber: PropTypes.number,
};

export default Sum;
