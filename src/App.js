import React from 'react';
import './App.scss';
import Sum from './components/Sum';

const App = () => (
  <body>
    <h1>React sum</h1>
    <Sum x={2} y={2} />
    <Sum x={10} y={0} />
    <Sum x={-5} y={5} />
  </body>
);

export default App;
