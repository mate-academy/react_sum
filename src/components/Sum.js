import React from 'react';
import './Sum.scss';
import PropTypes from 'prop-types';

const Sum = ({
  a,
  b,
}) => (
  <p>
    {`Sum of ${a} and ${b} is ${a + b}`}
  </p>
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
