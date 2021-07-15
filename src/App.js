import React from 'react';
import './App.scss';
import Sum from './components/Sum';

const App = () => (
  <div className="App">
    <h1>React sum</h1>
    <Sum valueA={2} valueB={2} />

    <Sum valueA={10} valueB={0} />

    <Sum valueA={-5} valueB={5} />
  </div>
);

export default App;
