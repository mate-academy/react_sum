import React from 'react';

export function Sum({
  a = 0,
  b = 0,
}) {
  return (
    <p>
      {`Sum of ${a} and git is ${a + b}`}
    </p>
  );
}
