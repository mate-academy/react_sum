import React from 'react';
import PropsTypes from 'prop-types';

export const Sum = ({ a = 0, b = 0 }) => {
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
