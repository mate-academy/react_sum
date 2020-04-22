import React from 'react';
import './App.css';
import SumNumbers from './components/Sum';

const App = () => (
  <h1>
    React
    <SumNumbers a={2} b={2} />
    <SumNumbers a={10} b={0} />
    <SumNumbers a={-5} b={5} />
  </h1>
);

export default App;
