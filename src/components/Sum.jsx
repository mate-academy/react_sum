import React from 'react';
import PropTypes from 'prop-types';

export const Sum = ({ numberA, numberB }) => (
  <p>
    Sum of
    {' '}
    {numberA}
    {' '}
    and
    {' '}
    {numberB}
    {' '}
    is
    {' '}
    {numberA + numberB}
  </p>
);

Sum.propTypes = {
  numberA: PropTypes.number.isRequired,
  numberB: PropTypes.number.isRequired,
};
