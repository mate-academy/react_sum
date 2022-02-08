import React from 'react';
import './App.scss';
import Sum from './components/Sum';

const App = () => (
  <>
    <Sum a={2} b={3} />
    <Sum a={-5} b={5} />
    <Sum a={2} />
    <Sum b={3} />
    <Sum />
  </>
);

export default App;
