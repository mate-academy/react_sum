import propTypes from 'prop-types';
import React from 'react';

const Sum = ({ a, b }) => (
  <p>
    {`Sum of ${a} and ${b} is ${a + b}`}
  </p>
);

Sum.propTypes = {
  a: propTypes.number.isRequired,
  b: propTypes.number.isRequired,
};

export default Sum;
