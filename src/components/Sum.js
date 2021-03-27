import React from 'react';
import PropTypes from 'prop-types';

function Sum({ a, b }) {
  const result = `Sum of ${a} and ${b} is ${a + b}`;

  return (
    <p>
      {result}
    </p>
  );
}

Sum.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
};

export default Sum;
