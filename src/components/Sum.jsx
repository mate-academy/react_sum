import React from 'react';

export function Sum(args) {
  const { a, b } = args;

  return (
    <p>{`Sum of ${a} and ${b} is ${a + b}`}</p>
  );
}

Sum.defaultProps = {
  a: 0,
  b: 0,
};
