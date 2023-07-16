import React from 'react';
import './App.css';
import { Sum } from './components/Sum/Sum';

export const App = () => (
  <>
    <Sum
      firstNumber={2}
      secondNumber={3}
    />
    <Sum
      firstNumber={-5}
      secondNumber={5}
    />
    <Sum
      firstNumber={10}
    />
    <Sum
      secondNumber={5}
    />
    <Sum />
  </>
);
