import React from 'react';
import propTypes from 'prop-types';

const Sum = ({
  a = 0,
  b = 0,
}) => (
  <p>
    {`Sum of ${a} and ${b} is ${a + b}`}
  </p>
);

Sum.propTypes = {
  a: propTypes.number.isRequired,
  b: propTypes.number.isRequired,
};

export default Sum;
