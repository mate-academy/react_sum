import React from 'react';
import PropTypes from 'prop-types';

const Sum = ({ a, b }) => {
  <>
    {`Sum of ${a} and ${b} is ${a + b}`}
  </>;
};

Sum.defaultProps = {
  a: 0,
  b: 0,
};

Sum.propTypes = {
  a: PropTypes.number,
  b: PropTypes.number,
};

export default Sum;
