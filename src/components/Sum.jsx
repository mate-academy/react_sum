// Don't forget to add default values an check types of props
import { number } from 'prop-types';
import React from 'react';

export const Sum = ({ a = 0, b = 0 }) => {
  const sumString = `Sum of ${a} and ${b} is ${a + b}`;

  return (
    <p>
      {sumString}
    </p>
  );
};

Sum.propTypes = {
  a: number.isRequired,
  b: number.isRequired,
};
