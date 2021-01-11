import React from 'react';
import propTypes from 'prop-types';

const Sum = ({ x, y }) => (
  <p>
    Sum of
    {' '}
    {x}
    {' '}
    and
    {' '}
    {y}
    {' '}
    is
    {' '}
    {x + y}
  </p>
);

Sum.propTypes = {
  x: propTypes.number.isRequired,
  y: propTypes.number.isRequired,
};

export default Sum;
