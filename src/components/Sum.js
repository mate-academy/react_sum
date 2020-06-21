import React from 'react';
import propTypes from 'prop-types';

function Sum({ a, b }) {
  return (
    <p>
      Sum of&nbsp;
      {a}
      &nbsp;and&nbsp;
      {b}
      &nbsp;is&nbsp;
      {a + b}
    </p>
  );
}

Sum.propTypes = {
  a: propTypes.number.isRequired,
  b: propTypes.number.isRequired,
};

export default Sum;
