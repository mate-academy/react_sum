import React from 'react';
import PropTypes from 'prop-types';

function Sum({ a, b }) {
  return (
    <>
      <p>{`Sum of ${a} and ${b} is ${a + b}`}</p>
    </>
  );
}

Sum.propTypes = {
  a: PropTypes.number,
  b: PropTypes.number,
};

Sum.defaultProps = {
  a: 0,
  b: 0,
};

export default Sum;
