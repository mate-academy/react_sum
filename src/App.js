import React from 'react';
import Sum from './Sum';
import './App.css';

const App = () => (
  <div>
    <Sum a={2} b={2} />
    <Sum a={10} b={0} />
    <Sum a={-5} b={5} />
  </div>
);

export default App;
