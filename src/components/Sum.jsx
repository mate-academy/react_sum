// export function Sum() {}
import React from 'react';

export function Sum({ a = 0, b = 0 }) {
  return (
    <p>
      Sum of&nbsp;
      {a}
      &nbsp;and&nbsp;
      {b}
      &nbsp;is&nbsp;
      {a + b}
    </p>
  );
}
