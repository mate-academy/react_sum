import React from 'react';
import PropTypes from 'prop-types';
import './Sum.css';

const Sum = ({ a, b }) => (
  <div className="result">
    {`Sum of ${a} and ${b} is ${a + b}`}
  </div>
);

Sum.propTypes = {
  a: PropTypes.number,
  b: PropTypes.number,
};

Sum.defaultProps = {
  a: 0,
  b: 0,
};

export default Sum;
