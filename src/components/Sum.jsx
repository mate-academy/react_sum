import React from 'react';

function Sum({ a = 0, b = 0 }) {
  const text = `Sum of ${a} and ${b}  is ${a + b}`;

  return (
    <p>{ text }</p>
  );
}

export default Sum;
