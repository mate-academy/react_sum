import React from 'react';
import Sum from './components/Sum/Sum';
import './App.scss';

const App = () => (
  <main className="main">
    <h1>React sum</h1>
    <Sum
      a={1}
      b={2}
    />
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
  </main>
);

export default App;
