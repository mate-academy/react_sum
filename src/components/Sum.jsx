import React from 'react';
import PropTypes from 'prop-types';

export const Sum = props => (
  <p>
    {`Sum of ${props.a} and ${props.b} is ${props.a + props.b}`}
  </p>
);

Sum.defaultProps = {
  a: 0,
  b: 0,
};

Sum.propTypes = {
  a: PropTypes.number,
  b: PropTypes.number,
};
