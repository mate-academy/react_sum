import React from 'react';
import './App.scss';
import { Sum } from './components/Sum/Sum';

export const App = () => (
  <>
    <p>Sum of 2 and 3 is 5</p>
    <p>Sum of -5 and 5 is 0</p>
    <p>Sum of 10 and 0 is 10</p>
    <p>Sum of 0 and 5 is 5</p>
    <p>Sum of 0 and 0 is 0</p>
    <Sum />
  </>
);
