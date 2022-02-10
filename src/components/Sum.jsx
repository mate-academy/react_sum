import React from 'react';
import PropsTypes from 'prop-types';

function Sum({ a, b }) {
  return (
    <p>{`Sum of ${a} and ${b} is ${a + b}`}</p>
  );
}

Sum.defaultProps = {
  a: 0,
  b: 0,
};

Sum.PropsTypes = {
  a: PropsTypes.number,
  b: PropsTypes.number,
};

export default Sum;
