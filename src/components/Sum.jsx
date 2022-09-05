import React from 'react';

export function Sum({ a, b }) {
  return (
    <p>
      {`Sum of ${a || 0} and ${b || 0} is ${a + b}`}
    </p>
  );
}

Sum.defaultProps = {
  a: 0,
  b: 0,
};
