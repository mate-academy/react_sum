import React from 'react';
import PropTypes from 'prop-types';

export const Sum = ({ a, b }) => (
  <p>{a + b}</p>
);

Sum.defaultProps = {
  a: 0,
  b: 0,
};

Sum.propTypes = {
  a: PropTypes.number,
  b: PropTypes.number,
};
