import React from 'react';
import PropTypes from 'prop-types';

export const Sum = ({ a = 0, b = 0 }) => (
  <p className="paragraph">
    {`Sum of ${a} and ${b} is ${a + b}`}
  </p>
);
Sum.propTypes = {
  a: PropTypes.string,
  b: PropTypes.string,
};

Sum.defaultProps = {
  a: 'Value: a',
  b: 'Value: b',
};
