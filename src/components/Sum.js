/* eslint-disable react/default-props-match-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import './Sum.scss';

const Sum = ({
  firstNumber,
  secondNumber,
}) => (
  <div>
    Sum components
    {' '}
    {firstNumber}
    {' '}
    and
    {' '}
    {secondNumber}
    {' '}
    is
    {' '}
    <span>
      {firstNumber + secondNumber}
    </span>
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
