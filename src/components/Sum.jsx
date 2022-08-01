// export function Sum() {}
import React from 'react';

export default function Sum(props) {
  const { a = 0, b = 0 } = props;

  return (
    <p>{`Sum of ${a} and ${b} is ${a + b}`}</p>
  );
}
