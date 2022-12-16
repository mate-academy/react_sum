import React from 'react';

export function Sum(props) {
  const a = props.a || 0;
  const b = props.b || 0;

  return (
    <p>
      {`Sum of ${a} and ${b} is ${a + b}`}
    </p>
  );
}
