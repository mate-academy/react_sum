import React from 'react';
import './App.scss';
import { Sum } from './components/Sum/Sum';

export const App = () => (
  <>
    <Sum firstNum={2} secondNum={3} />
    <Sum firstNum={-5} secondNum={5} />
    <Sum firstNum={10} secondNum={null} />
    <Sum firstNum={null} secondNum={3} />
    <Sum firstNum={null} secondNum={null} />
  </>
);
