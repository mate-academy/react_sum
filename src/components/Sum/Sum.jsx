import React from 'react';

export function Sum({ a = 0, b = 0 }) {
  const result = Number(a) + Number(b);

  return (
    <p>{`Sum of ${a} and ${b} is ${result}`}</p>
  );
}