import React from 'react';

export function Sum({
  a = 0,
  b = 0,
  text = `Sum of ${a} and ${b} is ${a + b}`,
}) {
  return (
    <p>
      {text}
    </p>
  );
}
