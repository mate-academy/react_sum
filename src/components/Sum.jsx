import React from 'react';
import PropTypes from 'prop-types';

const Sum = ({
  a,
  b,
  c,
}) => (
  <p>
    {`Sum of `}
    {a}
    {` and `}
    {b}
    {` is `}
    {c}
  </p>
);

Sum.defaultProps = {
  a: 0,
  b: 0,
  c: 0,
};

Sum.propTypes = {
  a: PropTypes.number,
  b: PropTypes.number,
  c: PropTypes.number,
};

export default Sum;
