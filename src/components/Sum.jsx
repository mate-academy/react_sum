import React from 'react';

export function Sum({ a = 0, b = 0 }) {
  const aNum = +a;
  const bNum = +b;

  return (
    <p>
      Sum of
      {' '}
      {aNum}
      {' '}
      and
      {' '}
      {bNum}
      {' '}
      is
      {' '}
      {(aNum + bNum)}
    </p>
  );
}
