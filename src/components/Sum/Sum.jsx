import React from 'react';
import PropTypes from 'prop-types';

export const Sum = ({ a = 0, b = 0 }) => (
  <p data-cy="result">
    Sum of {a} and {b} is <strong>{a + b}</strong>
  </p>
);

Sum.propTypes = {
  a: PropTypes.number,
  b: PropTypes.number,
};

export default Sum;
