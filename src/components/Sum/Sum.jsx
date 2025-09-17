import React from 'react';

export const Sum = ({ a = 0, b = 0 }) => {
  const total = Number(a) + Number(b);

  return <p>{`Sum of ${a} and ${b} is ${total}`}</p>;
};
