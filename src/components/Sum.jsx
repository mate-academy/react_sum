import React from 'react';

export function Sum({ a = 0, b = 0 }) {
  return (
    <p>
      {`Sum of ${a} and ${a} is ${a + b}`}
    </p>
  );
}
