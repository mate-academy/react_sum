import React from 'react';

export function Sum(props) {
  const { a = 0, b = 0 } = props;

  const sum = a + b;

  return <p>{`Sum of ${a} and ${b} is ${sum}`}</p>;
}
