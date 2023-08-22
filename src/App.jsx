import React from 'react';
import { Sum } from './components/Sum/Sum';

import './App.css';

const numbersToSum = [
  { a: 2, b: 3 },
  { a: -5, b: 5 },
  { a: 10 },
  { b: 5 },
  { },
];

export const App = () => (
  <>
    {numbersToSum.map(({ a, b }) => <Sum a={a} b={b} />)}
  </>
);
