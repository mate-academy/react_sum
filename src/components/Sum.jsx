import React from 'react';

export function Sum({ a, b }) {
  return (
    <p>
      {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
      Sum of {a} and {b} is {a + b}
    </p>
  );
}

Sum.defaultProps = {
  a: 0,
  b: 0,
};
