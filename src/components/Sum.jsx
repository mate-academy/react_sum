import React from 'react';
import PropTypes from 'prop-types';

export const Sum = ({ a = 0, b = 0 }) => (
  <p className="paragraph">
    {`Sum of ${a} and ${b} is ${a + b}`}
  </p>
);
Sum.propTypes = {
  a: PropTypes.number,
  b: PropTypes.number,
};

Sum.defaultProps = {
  a: 1,
  b: 0,
};
