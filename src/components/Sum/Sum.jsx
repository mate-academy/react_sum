import React from 'react';
import PropTypes from 'prop-types';

export const Sum = (props) => {
  const { a, b } = props;

  return <p>{`Sum of ${a} and ${b} is ${a + b}`}</p>;
};

Sum.defaultProps = {
  a: 0,
  b: 0,
};

Sum.propTypes = {
  a: PropTypes.number,
  b: PropTypes.number,
};
