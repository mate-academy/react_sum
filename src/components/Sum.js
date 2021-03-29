import React from 'react';
import PropTypes from 'prop-types';

import './Sum.scss';

export const Sum = ({ a, b }) => (
  <p className="text">
    {`Sum of ${a} and ${b} is ${a + b}`}
  </p>
);

Sum.defaultProps = {
  a: 2,
  b: 1,
};

Sum.propTypes = {
  a: PropTypes.number,
  b: PropTypes.number,
};
