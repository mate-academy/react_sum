import React from 'react';
import PropTypes from 'prop-types';
import '../App.scss';

const Sum = ({ a, b }) => (
  <p className="paragraph">
    {`Sum of ${a} and ${b} is ${a + b}`}
  </p>
);

Sum.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
};

export default Sum;
