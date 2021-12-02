import React from 'react';

export function Sum({ num1 = 0, num2 = 0 }) {
  return (
    <p className="container__paragraph">
      {`Sum of ${num1} and ${num2} is ${num1 + num2}`}
    </p>
  );
}
