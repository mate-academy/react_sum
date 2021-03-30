import React from 'react';
import PropTypes from 'prop-types';

const Sum = ({ first, second }) => (
  <p>
    Sum of
    {' '}
    {first}
    {' '}
    and
    {' '}
    {second}
    {' '}
    is
    {' '}
    {first + second}
  </p>
);

Sum.propTypes = {
  first: PropTypes.number.isRequired,
  second: PropTypes.number.isRequired,
};

export default Sum;
