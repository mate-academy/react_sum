import React from 'react';
import PropTypes from 'prop-types';

const Sum = props => (
  <p>
    {`Sum of ${props.a} and ${props.b} is ${props.a + props.b}`}
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
