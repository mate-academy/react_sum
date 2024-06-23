import React from 'react';
import './App.scss';
import { Sum } from './components/Sum/Sum';

const VALUES = [
  { id: 'value_1', a: 2, b: 3 },
  { id: 'value_2', a: -5, b: 5 },
  { id: 'value_3', a: 10, b: 0 },
  { id: 'value_4', a: 0, b: 5 },
  { id: 'value_5', a: 0, b: 0 },
];

export const App = () => (
  <>
    {VALUES.map(({ a, b, id }) => (
      <Sum key={id} a={a} b={b} />
    ))}
  </>
);
