import React from 'react';
import PropTypes from 'prop-types';
import './Sum.css';

const Sum = ({ op1, op2 }) => (
  <p>
    Sum of
    {' '}
    {op1}
    {' '}
    and
    {' '}
    {op2}
    {' '}
    is
    {' '}
    {op1 + op2}
  </p>
);

Sum.propTypes = {
  op1: PropTypes.number.isRequired,
  op2: PropTypes.number.isRequired,
};

export default Sum;
