import React from 'react';
import { Sum } from './components/Sum/Sum';
import './App.css';

export const App = () => (
  <>
    <Sum firstValue={2} secondValue={3} />
    <Sum firstValue={-5} secondValue={5} />
    <Sum firstValue={10} />
    <Sum secondValue={5} />
    <Sum />
  </>
);
