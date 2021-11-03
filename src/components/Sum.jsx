import React from 'react';
import PropTypes from 'prop-types';

const Sum = prop => (
  <p>{`Sum of ${prop.a} and ${prop.b} is ${prop.a + prop.b}`}</p>
);

Sum.propsTypes = {
  a: PropTypes.number,
  b: PropTypes.number,
};

Sum.defaultProps = {
  a: 0,
  b: 0,
};

export default Sum;
