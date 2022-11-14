import React from 'react';
import './App.css';
import { Sum } from './components/Sum';

export const App = () => (
  <>
    <Sum
      num1={2}
      num2={3}
    />
    <Sum
      num1={-5}
      num2={5}
    />
    <Sum
      num1={10}
    />
    <Sum
      num2={5}
    />
    <Sum />
  </>
);
