import React from 'react';
import PropsTypes from 'prop-types';

const Sum = ({ a, b }) => (
  <p>
    {`Sum of ${a} and ${b} is ${a + b}`}
  </p>
);

Sum.propTypes = {
  a: PropsTypes.number.isRequired,
  b: PropsTypes.number.isRequired,
};

export default Sum;
