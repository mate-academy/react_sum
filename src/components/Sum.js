import React from 'react';
import PropTypes from 'prop-types';

function Sum({ a = 0, b = 0 }) {
  return (
    <div>
      {`Sum of ${a} and ${b} is 
      ${a + b}`}
    </div>
  );
}

Sum.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
};

export default Sum;
