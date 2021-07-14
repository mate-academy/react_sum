import React from 'react';
import PropTypes from 'prop-types';

const Sum = ({
  a = 0,
  b = 0,
}) => (
  <p className="example">
    {`sum of ${a} and ${b} is ${a + b}`}
  </p>
);

Sum.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
};

export default Sum;
