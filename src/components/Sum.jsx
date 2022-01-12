import React from 'react';
import PropTypes from 'prop-types';

export const Sum = ({ a = 0, b = 0 }) => (
  <p>{`Sum of ${a} and ${b} is ${a + b}`}</p>
);

Sum.propTyp = {
  a: PropTypes.number,
  b: PropTypes.number,
};
