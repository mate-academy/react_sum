import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ a, b }) => (
  <p className="text">
    {`Sum of ${a} and ${b} is ${a + b}`}
  </p>
);

Text.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
};

export default Text;
