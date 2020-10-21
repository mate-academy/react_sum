import React from 'react';
import Proptypes from 'prop-types';

function Sum({ a, b }) {
  return (
    <p>
      {`Sum of ${a} and ${b} is ${a + b}`}
    </p>
  );
}

Sum.propTypes = {
  a: Proptypes.number.isRequired,
  b: Proptypes.number.isRequired,
};

export default Sum;
