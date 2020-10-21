import React from 'react';
import Proptypes from 'prop-types';

function Sum({ a, b }) {
  return (
    <p>
      {`Sum of ${a} and ${b} is ${a + b}`}
    </p>
  );
}

Sum.defaultProps = {
  a: 0,
  b: 0,
};

Sum.propTypes = {
  a: Proptypes.number,
  b: Proptypes.number,
};

export default Sum;
