// Don't forget to add default values an check types of props
import PropTypes from 'prop-types';
import React from 'react';

function Sum({ a = 0, b = 0 }) {
  return (
    <p>
      {
      `Sum of ${a} and ${b} is ${a + b}`
    }
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

export default Sum;
