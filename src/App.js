import React from 'react';
import './App.scss';
import Sum from './components/Sum';

const App = () => (
  <>
    <h1>React sum</h1>
    <Sum
      a={1}
      b={2}
    />
  </>
);

export default App;
