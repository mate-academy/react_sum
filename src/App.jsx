import React from 'react';
import './App.scss';
import SumComp from './components/Sum/Sum';

export const App = () => (
  <>
    <SumComp a={2} b={3} />
    <SumComp a={-5} b={5} />
    <SumComp a={10} />
    <SumComp b={5} />
    <SumComp />
  </>
);

export default App;
