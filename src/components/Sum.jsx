// export function Sum() {}
import React from 'react';

export function Sum(props) {
  const a = props.a || 0;
  const b = props.b || 0;
  const text = `Sum of ${a || 0} and ${b || 0} is ${a + b}`;

  return (
    <>
      <p>{text}</p>
    </>
  );
}
