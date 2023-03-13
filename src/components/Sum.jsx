import React from 'react';

export default function Sum({ a = 0, b = 0 }) {
  return (
    <h1>
      Sum of
      {' '}
      {a}
      {' '}
      and
      {' '}
      {b}
      {' '}
      is
      {' '}
      {a + b}
    </h1>
  );
}
