import React from 'react';
import PropTypes from 'prop-types';

const Sum = ({ a, b }) => (
  <p className="wrapper__input">
    {`Sum of ${a} and ${b} is ${a + b}`}
  </p>
);

Sum.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
};

export default Sum;
