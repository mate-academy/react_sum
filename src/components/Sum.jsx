import React from 'react';
import PropTypes from 'prop-types';

const Sum = ({
  a,
  b,
}) => (
  <p>
    <span>Sum of </span>
    {a}
    <span> and </span>
    {b}
    <span> is </span>
    {a + b}
  </p>
);

Sum.defaultProps = {
  a: 0,
  b: 0,
};

Sum.propTypes = {
  a: PropTypes.number,
  b: PropTypes.number,
};

export { Sum };
