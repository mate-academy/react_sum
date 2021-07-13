import React from 'react';
import propTypes from 'prop-types';

const Sum = ({ a, b }) => (
  <p>
    Sum of
    {` ${a} `}
    and
    {` ${b} `}
    is
    {` ${a + b}`}
  </p>
);

Sum.defaultProps = {
  a: 0,
  b: 0,
};

Sum.propTypes = {
  a: propTypes.number,
  b: propTypes.number,
};

export default Sum;
