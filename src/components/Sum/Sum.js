import React from 'react';
import PropTypes from 'prop-types';

function Sum({ a, b }) {
  const text = `Sum of ${a} and ${b} is ${a + b}`;

  return (
    <p className="sum">
      {text}
    </p>
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
