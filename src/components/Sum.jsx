import React from 'react';
import PropType from 'prop-type';

export const Sum = ({ a, b }) => (
  <p>{`Sum of ${a} and ${b} is ${a + b}`}</p>
);

Sum.defaultProps = {
  a: 0,
  b: 0,
};

Sum.propType = {
  a: PropType.number,
  b: PropType.number,
};
