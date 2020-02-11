import React from 'react';
import './App.css';
import Sum from './components/Sum';

const App = () => (
  <div>
    <h1>React sum</h1>
    <Sum expression={[[2, 2], [10, 0], [-5, 5]]} />
  </div>
);

export default App;
