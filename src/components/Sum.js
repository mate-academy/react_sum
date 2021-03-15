import React from 'react';
import PropTypes from 'prop-types';

const Sum = ({ a, b }) => {
  const sumString = `Sum of ${a} and ${b} is ${a + b}`;

  return (
    <p>
      {sumString}
    </p>
  );
};

Sum.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
};

export default Sum;
