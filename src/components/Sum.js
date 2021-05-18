import React from 'react';
import PropTypes from 'prop-types';

export default function Sum({ a, b }) {
  return (
    <p>
      {`Sum of ${a} and ${b} is ${a + b}`}
    </p>
  );
}

Sum.propTypes = {
  a: PropTypes.string.isRequired,
  b: PropTypes.string.isRequired,
};
