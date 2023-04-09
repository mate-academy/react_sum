import React from 'react';

export function Sum({ a, b }) {
  const sum = a + b;

  return <p>{`Sum of ${a} and ${b} is ${sum}`}</p>;
}

Sum.defaultProps = {
  a: 0,
  b: 0,
};
