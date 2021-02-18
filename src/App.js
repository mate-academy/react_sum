import React from 'react';
import './App.scss';
import Sum from './components/Sum';

const App = () => (
  <>
    <h1>React sum</h1>

    <Sum
      number1={2}
      number2={2}
    />
    <Sum
      number1={10}
      number2={0}
    />
    <Sum
      number1={-5}
      number2={5}
    />
  </>
);

export default App;
