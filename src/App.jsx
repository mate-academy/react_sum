import React from 'react';
import './App.css';
import Sum from './components/Sum/Sum';

export const App = () => (
  <>
    <Sum a={2} b={3} sum={5} />
    <Sum a={-5} b={5} sum={0} />
    <Sum a={10} b={0} sum={10} />
    <Sum a={0} b={5} sum={5} />
    <Sum a={0} b={0} sum={0} />
  </>
);
