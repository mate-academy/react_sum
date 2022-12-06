import React from 'react';
import './App.css';
import { Sum } from './components/Sum';

export const App = () => (
  <>
    {sumIt(2, 3)}
    {sumIt(-5, 5)}
    {sumIt(10)}
    {sumIt(0, 5)}
    {sumIt()}
  </>
);

function sumIt(x = 0, y = 0) {
  return (
    <Sum
      a={x}
      b={y}
    />
  );
}
