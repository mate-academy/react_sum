import React from 'react';
import PropTypes from 'prop-types';

export const Sum = ({ a, b }) => {
  const result = a + b;

  return (
    <p>
      {`Sum of ${a} and ${b} is ${result}`}
    </p>
  );
};

Sum.defaultProps = {
  a: 0,
  b: 0,
};

Sum.propTypes = {
  a: PropTypes.number,
  b: PropTypes.number,
};
