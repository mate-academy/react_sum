import React from 'react';
import './App.scss';
import Sum from './components/Sum';

const App = () => (
  <>
    <h1>React sum</h1>
    <Sum
      a={2}
      b={3}
    />
    <Sum
      a={10}
    />
    <Sum
      a={-5}
      b={5}
    />
  </>
);

export default App;
