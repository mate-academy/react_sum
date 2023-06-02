import React from 'react';
import './Sum.css';

export function Sum(props) {
  const { a = 0, b = 0 } = props;
  const sumTxt = `Sum of ${a} and ${b} is ${a + b}`;

  return (
    <p className="sum">
      {sumTxt}
    </p>
  );
}
