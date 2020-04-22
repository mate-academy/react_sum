import React from 'react';
import PropType from 'prop-types';

function Sum({ a, b }) {
  return (
    <h2>
      {
        `Sum of ${a} and ${b} is ${a + b}`
      }
    </h2>
  );
}

Sum.propTypes = {
  a: PropType.number.isRequired,
  b: PropType.number.isRequired,
};

export default Sum;
