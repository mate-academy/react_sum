import React from 'react';

function Sum({
  a = 0,
  b = 0,
}) {
  return (
    <p>{`Sum of ${a} and ${b} is ${a + b}`}</p>
  );
}

export { Sum };
