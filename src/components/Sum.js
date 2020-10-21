import React from 'react';
import propTypes from 'prop-types';

const Sum = ({ a, b }) => (
  <p className="sum">
    {`Sum of ${a} and ${b} is ${a + b}`}
  </p>
);

Sum.propTypes = {
  a: propTypes.number.isRequired,
  b: propTypes.number.isRequired,
};

export default Sum;
