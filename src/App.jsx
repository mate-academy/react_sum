import React from 'react';
import './App.css';
import { Sum } from './components/Sum';

export const App = () => (
  <>
    <p>{`Sum of 2 and 3 is ${Sum(2, 3)}`}</p>
    <p>{`Sum of -5 and 5 is ${Sum(-5, 5)}`}</p>
    <p>{`Sum of 10 and 0 is ${Sum(10)}`}</p>
    <p>{`Sum of 0 and 5 is ${Sum(5)}`}</p>
    <p>{`Sum of 0 and 0 is ${Sum()}`}</p>
  </>
);
