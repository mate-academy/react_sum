import React from 'react';
import PropTypes from 'prop-types';

function Sum({ a, b }) {
  return (
    <p>
      {`Sum of ${a} and ${b} is ${a + b}`}
    </p>
  );
}

Sum.propTypes = {
  a: PropTypes.isRequired,
  b: PropTypes.isRequired,
};

export default Sum;
