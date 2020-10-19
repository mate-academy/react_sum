import React from 'react';
import propTypes from 'prop-types';

const Sum = ({ a, b }) => (
  <p className="list-group-item bg-dark text-light">
    {`Sum of ${a} and ${b} is ${a + b}`}
  </p>
);

Sum.propTypes = {
  a: propTypes.number.isRequired,
  b: propTypes.number.isRequired,
};

export default Sum;
