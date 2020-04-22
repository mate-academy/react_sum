import React from 'react';
import './App.css';
import Sum from './components/Sum/Sum';

const App = () => (
  <div>
    <h1>React sum:</h1>
    <Sum op1={2} op2={1} />
    <Sum op1={2} op2={2} />
    <Sum op1={10} op2={0} />
    <Sum op1={-5} op2={5} />
  </div>
);

export default App;
