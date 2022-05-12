import React from 'react';
import PropTypes from 'proptypes';

export const Sum = ({
  a,
  b,
}) => (
  <p>
    <h2>
      Sum of
      {a}
      {' '}
      and
      {b}
      {' '}
      is
      {a + b}
    </h2>
  </p>
);

Sum.defaultProps = {
  a: 0,
  b: 0,
};

Sum.propTypes = {
  a: PropTypes.number,
  b: PropTypes.number,
};
