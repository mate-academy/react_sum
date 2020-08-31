import React from 'react';
import './App.css';

import Sum from './components/Sum';

const App = () => (
  <div>
    <h1>React sum</h1>
    <Sum a={3} b={4} />
    <Sum a={10} b={0} />
    <Sum a={-5} b={5} />
  </div>
);

export default App;
