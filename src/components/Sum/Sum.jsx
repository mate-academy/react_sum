import React from 'react';
import './Sum.scss';

export const Sum = ({ a = 0, b = 0 }) => (
  <p className="list">{`Sum of ${a} and ${b} is ${a + b}`}</p>
);
