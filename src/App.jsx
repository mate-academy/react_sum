import React from 'react';
import './App.scss';
import Sum from './components/Sum';

const App = () => (
  <>
    <Sum a={2} and b={5} />
    <Sum a={-5} and b={0} />
    <Sum a={10} and b={10} />
    <Sum a={0} and b={5} />
    <Sum a={0} and b={0} />
  </>
);

export default App;
