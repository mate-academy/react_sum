import React from 'react';
import propTypes from 'prop-types';

export const Sum = ({ a, b }) => (
  <p>
    {`Sum of ${a} and ${b} is ${a + b}`}
  </p>
);

Sum.propTypes = {
  a: propTypes.number,
  b: propTypes.number,
};

Sum.defaultProps = {
  a: 0,
  b: 0,
};
