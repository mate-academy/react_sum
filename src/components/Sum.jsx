import React from 'react';
import PropTypes from 'prop-types';

function Sum({ a = 0, b = 0 }) {
  const sum = a + b;

  return (
    <p>
      {`Sum of ${a} and ${b} is ${sum}`}
    </p>
  );
}

Sum.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
};

export default Sum;
