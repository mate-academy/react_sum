import React from 'react';
import { Sum } from './components/Sum';
import './App.css';

const arr = [[2, 3], [-5, 5], [10], [0, 5], []];

export const App = () => (
  <>
    {arr.map(([a, b]) => <Sum a={a} b={b} />)}
  </>
);
