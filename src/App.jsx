import React from 'react';
import './App.css';

import { Sum } from './components/Sum';

const arr = [[2, 3], [-5, 5], [10], [0, 5], []];

export const App = () => (
  <>
    {arr.map(([a, b]) => <Sum a={a} b={b} />)}
  </>
);
