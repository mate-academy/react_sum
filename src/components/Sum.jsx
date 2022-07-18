import React from 'react';
import PropTypes from 'prop-types';

export const Sum = ({ a = 0, b = 0 }) => {
  const result = a + b;
  const resultLine = `Sum of ${a} and ${b} is ${result}`;

  return (
    <p>{resultLine}</p>
  );
};

Sum.prototype = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
};
