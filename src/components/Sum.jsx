import React from 'react';

export function Sum(props) {
  const firstNum = props.a ?? 0;
  const secondNum = props.b ?? 0;
  const sum = firstNum + secondNum;

  return <p>{`Sum of ${firstNum} and ${secondNum} is ${sum}`}</p>;
}
