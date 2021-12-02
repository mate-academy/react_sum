import React from 'react';
import './App.scss';
import { Sum } from './components/Sum';

const App = () => (
  <div className="container">
    <div className="container__sums">
      <Sum num1={2} num2={3} />
      <Sum num1={-5} num2={5} />
      <Sum num1={10} />
      <Sum num2={5} />
      <Sum />
    </div>
  </div>
);

export default App;
