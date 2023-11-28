import React from 'react';
import './App.css';
import { Sum } from './components/Sum/Sum';

export const App = () => (
  <>
    {React.createElement(Sum, { a: 2, b: 3 })}
    {React.createElement(Sum, { a: -5, b: 5 })}
    {React.createElement(Sum, { a: 10 })}
    {React.createElement(Sum, { b: 5 })}
    {React.createElement(Sum, { })}
  </>
);
