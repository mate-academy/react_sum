import React from 'react';
import PropTypes from 'prop-types';

function Sum({ a = 0, b = 0 }) {
  return (
    <p>
      <i>{'Sum of '}</i>
      <b>{a}</b>
      <i>{' and '}</i>
      <b>{b}</b>
      <i>{' is '}</i>
      <b>{a + b}</b>
    </p>
  );
}

Sum.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
};

export default Sum;
