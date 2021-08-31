// Don't forget to add default values an check types of props
import React from 'react';
import PropTypes from 'prop-types';

export const Sum = ({ a, b }) => (
  <p>
    {'Sum of '}
    <b>{a}</b>
    {' and '}
    <b>{b}</b>
    {' is '}
    <b>{a + b}</b>
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
