import React from 'react';
import PropTypes from 'prop-types';

function Sum({ a, b }) {
  const s = a + b;

  return (
    <>
      {`Sum of ${a} and ${b} is ${s}`}
    </>
  );
}

Sum.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
};

export default Sum;
