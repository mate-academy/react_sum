import PropTypes from 'prop-types';
/* eslint-disable react/jsx-one-expression-per-line */

import React from 'react';

export const Sum = ({ a, b }) => (
  <p>
    Sum of {a} and {b} is {a + b}
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
