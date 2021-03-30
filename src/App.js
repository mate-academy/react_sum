import React from 'react';
import './App.scss';
import Sum from './components/sum/Sum';

const App = () => (
  <>
    <h1 className="title">React sum</h1>
    <Sum a={2} b={2} />
    <Sum a={10} b={0} />
    <Sum a={-5} b={5} />
  </>
);

export default App;
