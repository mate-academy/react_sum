import React from 'react';
import './App.scss';
import Sum from './components/Sum/Sum';

export const App = () => (
  <>
    <Sum t1={2} t2={3} />
    <Sum t1={-5} t2={5} />
    <Sum t1={10} t2={0} />
    <Sum t1={0} t2={5} />
    <Sum t1={0} t2={0} />
  </>
);
