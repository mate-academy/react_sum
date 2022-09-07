import React from 'react';

Sum.defaultProps = {
  a: 0,
  b: 0,
};

export function Sum({ a, b }) {
  return (
    <p>
      {`Sum of ${a} and ${b} is ${a + b}`}
    </p>
  );
}
