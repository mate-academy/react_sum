import React from 'react';
import './App.scss';
import Sum from './components/Sum';

const App = () => (
  <>
    <h1>React sum</h1>
    <Sum firstNumber={2} secondNumber={2} />
    <Sum firstNumber={10} secondNumber={0} />
    <Sum firstNumber={-5} secondNumber={5} />
  </>
);

export default App;
