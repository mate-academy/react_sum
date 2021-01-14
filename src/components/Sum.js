import React from 'react';
import PropTypes from 'prop-types';

const Sum = ({ a, b }) => (
  <div>
    {`Sum of ${a} and ${b} is ${+a + +b}`}
  </div>
);

Sum.propTypes = {
  a: PropTypes.string.isRequired,
  b: PropTypes.string.isRequired,
};

export default Sum;
