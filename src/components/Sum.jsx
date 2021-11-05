import React from 'react';
import PropTypes from 'prop-types';

function Sum({ a = 0, b = 0 }) {
  return (
    <li>
      <span>{`Sum of ${a} and ${b} is ${a + b}`}</span>
    </li>
  );
}

export default Sum;
Sum.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
};
