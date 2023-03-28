import React from 'react';

export function Sum({
  x = 0,
  y = 0,
}) {
  return (
    <p>
      Sum of
      {` ${x} `}
      and
      {` ${y} `}
      is
      {` ${x + y} `}
    </p>
  );
}
