import React from 'react';
import PropTypes from 'prop-types';

const Sum = ({ a, b }) => (
  <p>
    Sum of&nbsp;
    <code>{a}</code>
    {` and `}
    <code>{b}</code>
    {` is `}
    <code>{a + b}</code>
  </p>
);

Sum.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
};

export default Sum;
