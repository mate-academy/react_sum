import React from 'react';
import './App.scss';
import Sum from './components/Sum';

const App = () => (
  <main className="app">
    <h1 className="app__title">React sum</h1>
    <Sum a={2} b={2} />
    <Sum a={10} b={0} />
    <Sum a={-5} b={5} />
  </main>
);

export default App;
