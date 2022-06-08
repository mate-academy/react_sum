import React from 'react';
import PropTypes from 'prop-types';

export const Sum = ({
  a,
  b,
}) => (
  <p>
    <span>{`Sum of ${a} and ${b} is ${a + b}`}</span>
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
