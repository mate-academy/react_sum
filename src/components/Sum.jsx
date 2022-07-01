import React from 'react';

export function Sum({ a = 0, b = 0 }) {
  return (
    <p className="Text">{`Sum of ${a} and ${b} is ${a + b}`}</p>
  );
}
