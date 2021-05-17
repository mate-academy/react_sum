import React from 'react';
import PropTypes from 'prop-types';

const Sum = ({ a, b }) => {
  const str = `Sum of ${a} and ${b} is ${a + b}`;

  return (
    <p className="result">
      {str}
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

export default Sum;
