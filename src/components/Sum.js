import React from 'react';
import PropTypes from 'prop-types';

const Sum = ({ num1, num2 }) => (
  <p>
    Sum of
    {' '}
    {num1}
    {' '}
    and
    {' '}
    {num2}
    {' '}
    is
    {' '}
    {num1 + num2}
  </p>
);

Sum.propTypes = {
  num1: PropTypes.number.isRequired,
  num2: PropTypes.number.isRequired,
};

export default Sum;
