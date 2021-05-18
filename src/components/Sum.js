import React from 'react';
import PropTypes from 'prop-types';

const Sum = ({ a, b }) => (
  <p className="Numbers">
    {`Sum of ${a} and ${b} is ${a + b}`}
  </p>
);

Sum.defaultProps = {
  b: 0,
};

Sum.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number,
};

export default Sum;
