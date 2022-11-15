import React from 'react';
import PropTypes from 'prop-types';

export function Sum({ a, b }) {
  const result = a + b;

  return (
    <p className="Sum">
      {`Sum of ${a} and ${b} is ${result}`}
    </p>
  );
}

Sum.defaultProps = {
  a: 0,
  b: 0,
};

Sum.propTypes = {
  a: PropTypes.number,
  b: PropTypes.number,
};
