import React from 'react';
import PropTypes from 'prop-types';

const Sum = ({ a, b }) => (
  <div className="sum__example">
    {`Sum of ${a} and ${b} is ${a + b}`}
  </div>
);

Sum.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
};

export default Sum;
