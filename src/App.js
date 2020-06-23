import React from 'react';
import './App.css';
import Sum from './components/Sum';

const App = () => (
  <p>
    {Sum(2, 2)}
    <br />
    {Sum(10, 0)}
    <br />
    {Sum(-5, 5)}
  </p>
);

export default App;
