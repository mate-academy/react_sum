import React from 'react';
import './App.scss';
import Sum from './components/Sum';

const App = () => (
  <div>
    <h1>React sum</h1>
    <Sum x={2} y={2} />
    <Sum x={10} y={0} />
    <Sum x={-5} y={5} />
  </div>
);

export default App;
