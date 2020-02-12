import React from 'react';
import PropTypes from 'prop-types';

function Sum({ a, b }) {
  return (
    <div>
      <h2>
        {`Sum of ${a} and ${b} is ${a + b}`}
      </h2>
    </div>
  );
}

Sum.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
};

export default Sum;
