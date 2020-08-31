import React from 'react';
import './App.css';
import Sum from './Sum';

const App = () => (
  <div className="section">
    <h1 className="heading">React sum</h1>
    <Sum
      a={2}
      b={2}
    />
    <Sum
      a={10}
      b={0}
    />
    <Sum
      a={-5}
      b={5}
    />
  </div>
);

export default App;
