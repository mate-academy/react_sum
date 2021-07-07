import React from 'react';
import './Sum.css';
import PropTypes from 'prop-types';

function Sum({ a, b }) {
  return (
    <div className="div_sum">
      Sum of
      {' '}
      {a}
      {' '}
      and
      {' '}
      {b}
      {' '}
      is
      {' '}
      {a + b}
    </div>
  );
}

Sum.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
};

export default Sum;
