import React from 'react';
import PropTypes from 'prop-types';

export const Components = ({
  a,
  b,
}) => (
  <p>
    {`Sum of ${a} and ${b} is ${a + b}`}
  </p>
);

Components.defaultProps = {
  a: 0,
  b: 0,
};

Components.propTypes = {
  a: PropTypes.number,
  b: PropTypes.number,
};
