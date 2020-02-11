import React from 'react';
import PropTypes from 'prop-types';

const Sum = (props) => {
  const { a, b } = props;
  const expresion = a + b;

  return (
    <p>{`Sum of ${a} and ${b} is ${expresion}`}</p>
  );
};

Sum.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
};

export default Sum;
