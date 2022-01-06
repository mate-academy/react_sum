import React from 'react';
import PropTypes from 'prop-types';

function Sum({ x, y }) {
  return (
    <p>{`Sum of ${x} and ${y} is ${x + y}`}</p>
  );
}

Sum.defaultProps = {
  x: 0,
  y: 0,
};

Sum.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
};

export default Sum;
