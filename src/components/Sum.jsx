import React from 'react';
import PropTypes from 'prop-types';

export const Sum = ({
  n1,
  n2,
}) => (
  <p>
    Sum of
    {' '}
    {n1}
    {' '}
    and
    {' '}
    {n2}
    {' '}
    is
    {' '}
    {n1 + n2}
  </p>
);

Sum.defaultProps = {
  n1: 0,
  n2: 0,
};

Sum.propTypes = {
  n1: PropTypes.number,
  n2: PropTypes.number,
};
