import React from 'react';
import PropTypes from 'prop-types';

Sum.propTypes = {
  a: PropTypes.number,
  b: PropTypes.number,

};

export function Sum({
  a = 0,
  b = 0,
}) {
  const sum = a + b;

  if (sum === 0) {
    <p>
      no params at all
    </p>;
  }

  return (
    <p>
      {`Sum of ${a} and ${b} is ${a + b}`}
    </p>
  );
}
