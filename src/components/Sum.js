import React from 'react';
import Proptypes from 'prop-types';

function Sum({ x, y }) {
  return (
    <p>
      {`Sum of ${x} and ${y} is ${x + y}`}
    </p>
  );
}

Sum.propTypes = {
  x: Proptypes.number.isRequired,
  y: Proptypes.number.isRequired,
};

export default Sum;
