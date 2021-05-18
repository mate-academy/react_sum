import React from 'react';
import PropTypes from 'prop-types';
import './Sum.scss';

const Sum = ({ a, b }) => (
  <p className="sum-row">
    {`Sum of ${a} and ${b} is ${a + b}`}
  </p>
);

Sum.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
};

export default Sum;
