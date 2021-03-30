import React from 'react';
import PropTypes from 'prop-types';

import './sum.scss';

const Sum = ({ a, b }) => {
  const sum = a + b;

  return <p className="sum">{`Sum of ${a} and ${b} is ${sum}`}</p>;
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
