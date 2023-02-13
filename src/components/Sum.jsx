import React from 'react';

export function Sum({ a = 0, b = 0 }) {
  const space = ' ';

  return (
    <p>
      Sum of
      {space}
      {a}
      {space}
      and
      {space}
      {b}
      {space}
      is
      {space}
      {a + b}
    </p>
  );
}
