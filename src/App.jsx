import React from 'react';
import { Sum } from './components/Sum/Sum';

import './App.css';

const numbersToSum = [
  { id: 1, a: 2, b: 3 },
  { id: 2, a: -5, b: 5 },
  { id: 3, a: 10 },
  { id: 4, b: 5 },
  { id: 5 },
];

export const App = () => (
  <>
    {numbersToSum.map(({ a, b, id }) => (
      <Sum key={id} a={a} b={b} />
    ))}
  </>
);
