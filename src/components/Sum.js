import React from 'react';
import PropTypes from 'prop-types';

const Sum = function({ a, b }) {
  return (
    <li>
      <span>
        {`Sum of ${a} and ${b} is ${a + b}`}
      </span>
    </li>
  );
};

Sum.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
};

export default Sum;
