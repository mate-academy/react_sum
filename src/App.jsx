import React from 'react';
import './App.css';
import { Sum } from './components/Sum';

export const App = () => (
  <>
    <p>Sum of 2 and 3 is 5</p>
    <Sum
      a={2}
      b={3}
    />
    <Sum
      a={-5}
      b={5}
    />
    <Sum
      a={10}
    />
    <Sum />
  </>
);
