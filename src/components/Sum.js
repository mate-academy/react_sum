/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';

const Sum = ({ a, b }) => (
  <div>
    <p>
      Sum of {a} and {b} is {a + b}
    </p>
  </div>
);

Sum.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
};

export default Sum;
