import React from 'react';
import PropTypes from 'prop-types';

function Sum(props) {
  const { a, b } = props;
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
