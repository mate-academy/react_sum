import React from 'react';
import Sum from './components/Sum';
import './App.scss';

const App = () => (
  <div className="app">
    <h1>React sum</h1>
    <Sum firstNum={2} secondNum={2} />
    <Sum firstNum={10} />
    <Sum firstNum={-5} secondNum={5} />
  </div>

);

export default App;
