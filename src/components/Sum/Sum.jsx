import React from 'react';

export function Sum({ a, b }) {
  const message = `Sum of ${a} and ${b} is ${a + b}`;

  return (
    <p>
      {message}
    </p>
  );
}

Sum.defaultProps = {
  a: 0,
  b: 0,
};
