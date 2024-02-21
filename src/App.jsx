import React from 'react';
import './App.scss';
import SumFinal from './components/Sum/Sum';

export const App = () => (
  <div>
    <SumFinal a={2} b={3} />
    <SumFinal a={-5} b={5} />
    <SumFinal a={10} b={0} />
    <SumFinal a={0} b={5} />
    <SumFinal a={0} b={0} />
  </div>
);
