import React from 'react';

export function Sum(props) {
  const a = props.a ? +props.a : 0;
  const b = props.b ? +props.b : 0;
  const sum = a + b;

  return (
    <p>
      {`Sum of ${a} and ${b} is ${sum}`}
    </p>
  );
}
