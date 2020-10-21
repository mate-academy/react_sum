import React from 'react';
import Sum from './components/Sum';
import './App.scss';

const App = () => (
  <section className="sum">
    <h1 className="sum__title">React sum</h1>
    <Sum a={2} b={2} />
    <Sum a={10} b={0} />
    <Sum a={-5} b={5} />
  </section>
);

export default App;
