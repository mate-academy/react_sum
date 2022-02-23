import React from 'react';
import PropTypes from 'prop-types';

const resultColor = {
  color: '#b83c3c',
};

export const Sum = ({ a, b }) => (
  <p>
    {`Sum of ${a} and ${b} is `}
    <span style={resultColor}>{a + b}</span>
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
