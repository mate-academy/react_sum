import React from 'react';
import './App.scss';
import { Sum } from './components/Sum/Sum';

export const App = () => (
  <>
    <p>{Sum(2, 3)}</p>
    <p>{Sum(-5, 5)}</p>
    <p>{Sum(10)}</p>
    <p>{Sum(5)}</p>
    <p>{Sum()}</p>
  </>
);
