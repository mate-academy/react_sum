/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import propTypes from 'prop-types';

const Sum = ({
  a,
  b,
}) => (
  <div>
    <p>
      Sum of {a} and {b} is {a + b}
    </p>
  </div>
);

Sum.propTypes = {
  a: propTypes.number,
  b: propTypes.number,
};

export default Sum;
