import React from 'react';
import './App.scss';
import Sum from './components/Sum';

const App = () => (
  <div>
    <h1>React sum</h1>

    {[[2, 2], [10, 0], [-5, 5]].map(([a, b]) => (
      <Sum a={a} b={b} />
    ))}
  </div>
);

export default App;
