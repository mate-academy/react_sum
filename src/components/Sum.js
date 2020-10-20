import React from 'react';
import PropTypes from 'prop-types';

const Sum = ({
  expression: { x, y },
}) => (
  <p>
    {`Sum of ${x} and ${y} id ${x + y}`}
  </p>
);

Sum.propTypes = {
  expression: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
};

export default Sum;
