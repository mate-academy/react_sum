import React from 'react';
import PropTypes from 'prop-types';

const Sum = props => (
  <p>
    {`Sum of ${props.a} and ${props.b} is ${+props.a + +props.b}`}
  </p>
);

export { Sum };

Sum.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
};
