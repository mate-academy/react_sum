import React from 'react';
import propTypes from 'prop-types';

const Sum = ({
  a,
  b,
}) => (
  <h1>
    {// eslint-disable-next-line react/jsx-one-expression-per-line
    }Sum of {a} and {b} is {a + b}
  </h1>
);

export default Sum;

Sum.propTypes = {
  a: propTypes.number.isRequired,
  b: propTypes.number.isRequired,
};
