import React from 'react';


export const Sum = ({ a = 0, b = 0 }) => {
  const sentence = `Sum of ${a} and ${b} is ${a + b}`;

  return (
    <p>{sentence}</p>
  );
};