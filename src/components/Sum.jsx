import React from 'react';
import '../App.scss';

const Sum = ({ a, b }) => (
  <p>{`Sum of ${a} and ${b} is ${a + b}`}</p>
);

Sum.defaultProps = {
  a: 0,
  b: 0,
};

export default Sum;
