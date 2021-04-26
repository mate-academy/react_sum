import React from 'react';
import Sum from './components/Sum'
import './App.scss';

const App = () => (
  <>
    <h1>React sum</h1>
    <Sum num1={2} num2={2} />
    <Sum num1={10} num2={0} />
    <Sum num1={-5} num2={5} />
  </>
);


export default App;
