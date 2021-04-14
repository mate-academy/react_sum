import React from 'react';
import './App.scss';
import Sum from './components/Sum';

const App = () => (
  <div className="App">
    <h1>React sum</h1>
    <p>Sum 2 and 1 is 3</p>
    <Sum a={2} b={2} />
    <Sum a={10} b={0} />
    <Sum a={-5} b={5} />
  </div>
);

export default App;
