import React from 'react';

export function Sum(props = 0) {
  const aNum = +props.a || 0;
  const bNum = +props.b || 0;

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
