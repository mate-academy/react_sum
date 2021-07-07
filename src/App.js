import React from 'react';
import './App.scss';
import Sum from './components/Sum';

const App = () => (
  <>
    <h1>React sum</h1>
    <Sum a={1} b={3} />
    <Sum a={2} b={2} />
    <Sum a={10} b={0} />
    <Sum />
  </>
);

export default App;
