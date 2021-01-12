import React from 'react';
import PropTypes from 'prop-types';

const Sum = ({ a, b }) => {
  const result = a + b;

  return (
    <p>
      {`Sum of ${a} and ${b} is ${result}`}
    </p>
  );
};

Sum.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
};

export default Sum;
