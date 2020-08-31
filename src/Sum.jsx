import React from 'react';
import PropTypes from 'prop-types';

import './Sum.css';

const Sum = ({ a, b }) => (
  <p className="sum">
    {`Sum ${a} + ${b} = ${a + b}`}
  </p>
);

Sum.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
};

export default Sum;
