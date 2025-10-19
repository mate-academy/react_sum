import React from 'react';

export const Sum = ({ a = 0, b = 0 }) => {
  const aMissing = a === undefined;
  const bMissing = b === undefined;

  const aText = aMissing ? 'nothing' : a;
  const bText = bMissing ? 'nothing' : b;

  const result = (aMissing ? 0 : a) + (bMissing ? 0 : b);

  return <p>{`Sum of ${aText} and ${bText} is ${result}`}</p>;
};
