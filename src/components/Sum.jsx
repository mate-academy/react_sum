import React from 'react';
import PropsTypes from 'prop-types';

export const Sum = ({ a, b }) => {
  const text = `Sum of ${a} and ${b} is ${a + b}`;

  return (
    <p>{text}</p>
  );
};

Sum.propsTypes = {
  a: PropsTypes.number,
  b: PropsTypes.number,
};

Sum.defaultProps = {
  a: 0,
  b: 0,
};
