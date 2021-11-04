import React from 'react';

export function Sum(prop) {
  const { a = 0, b = 0 } = prop;

  return (
    <p>
      {`Sum of ${a} and ${b} is ${a + b}`}
    </p>
  );
}
