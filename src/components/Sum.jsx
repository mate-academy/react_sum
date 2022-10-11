import React from 'react';
import propTypes from 'prop-types';

import './Sum.css';

export const Sum = ({ a, b }) => (
  <p className="sum">
    {`Sum of ${a} and ${b} is ${a + b}`}
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
