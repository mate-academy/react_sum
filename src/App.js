import React from 'react';
import './App.css';
import Sum from './components/Sum';

const App = () => (
  <p>
    <Sum a={2} b={2} />
    <Sum a={10} b={0} />
    <Sum a={-5} b={5} />
  </p>
);

export default App;
