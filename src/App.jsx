import React from 'react';
import { Sum } from './components/Sum';
import './App.css';

export const App = () => (
  <>
    <p>Sum of 2 and 3 is 5</p>
    <p>Sum of -5 and 5 is 0</p>
    <p>Sum of 10 and 0 is 10</p>
    <p>Sum of 0 and 5 is 5</p>
    <p>Sum of 0 and 0 is 0</p>
    <Sum a={3} b={5} />
    <Sum a={-5} b={5} />
    <Sum a={10} b={0} />
    <Sum a={0} b={5} />
    <Sum a={0} b={0} />
  </>
);
