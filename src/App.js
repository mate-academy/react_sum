import React from 'react';
import Sum from './components/Sum';
import './App.scss';

const App = () => (
  <div className="main">
    <h1>React sum</h1>
    <ul className="sumList">
      <Sum a={2} b={2} />
      <Sum a={10} b={0} />
      <Sum a={-5} b={5} />
    </ul>
  </div>
);

export default App;
