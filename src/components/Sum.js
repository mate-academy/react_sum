import React from 'react';
import PropType from 'prop-types';

function Sum({ a, b }) {
  return (
    <p>
      {
        `Sum of ${a} and ${b} is ${a + b}`
      }
    </p>
  );
}

Sum.propTypes = {
  a: PropType.number.isRequired,
  b: PropType.number.isRequired,
};

export default Sum;
