import React from 'react';

export function Sum({ firstValue, secondValue }) {
  const sum = firstValue + secondValue;

  return (
    <p>{`Sum of ${firstValue} and ${secondValue} is ${sum}`}</p>
  );
}

Sum.defaultProps = {
  firstValue: 0,
  secondValue: 0,
};
