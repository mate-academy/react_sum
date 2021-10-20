import React from 'react';
import './App.scss';
import Sum from './components/Sum';

const App = () => (
  <>
    <Sum number1={2} number2={3} />
    <Sum number1={-5} number2={0} />
    <Sum number1={10} number2={0} />
    <Sum number1={0} number2={5} />
    <Sum number1={0} number2={0} />
  </>
);

export default App;
