import React from 'react';
import PropTypes from 'prop-types';

function SumNumbers({ a, b }) {
  return (
    <p>
      Sum of
      {a}
      {' '}
      and
      {b}
      {' '}
      is
      {a + b}
    </p>
  );
}

SumNumbers.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
};

export default SumNumbers;
