import React from 'react';
import './App.css';
import { Sum } from './components/Sum';

export const App = () => (
  <>
    <p>Sum of 2 and 3 is 5</p>
    <p>Sum of -5 and 5 is 0</p>
    <p>Sum of 10 and 0 is 10</p>
    <p>Sum of 0 and 5 is 5</p>
    <p>Sum of 0 and 0 is 0</p>
    <Sum a={10} b={7} />
    <Sum a={6} b={-4} />
    <Sum a={-40} b={-2} />
    <Sum a={6} />
    <Sum b={12} />
    <Sum />
  </>
);
