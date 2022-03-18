import React from 'react';
import PropTypes from 'prop-types';

export const Sum = ({
  valA,
  valB,
}) => (
  <p>
    {`Sum of ${valA} and ${valB} is ${valA + valB}`}
  </p>
);

Sum.propTypes = {
  valA: PropTypes.number,
  valB: PropTypes.number,
};

Sum.defaultProps = {
  valA: 0,
  valB: 0,
};
