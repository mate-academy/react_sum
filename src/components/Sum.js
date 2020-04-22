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
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
};
export default Sum;
