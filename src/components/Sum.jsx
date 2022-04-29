import React from 'react';
import ProtoTypes from 'prop-types';

export const Sum = ({ a, b }) => (
  <p>{`Sum of ${a} and ${b} is ${a + b}`}</p>
);

Sum.defaultProps = {
  a: 0,
  b: 0,
};

Sum.ProtoTypes = {
  a: ProtoTypes.number,
  b: ProtoTypes.number,
};
