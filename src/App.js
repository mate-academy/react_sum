import React from 'react';
import Sum from './components/Sum';
import './App.scss';

const App = () => (
  <>
    <h1>React sum</h1>
    <Sum
      num1={2}
      num2={1}
    />
  </>
);

export default App;
