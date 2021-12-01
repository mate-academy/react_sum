import React from 'react';
import './App.scss';
import { Sum } from './components/Sum';

const App = () => (
  <section className="sums">
    <div className="sums__card">
      <h1 className="sums__title">Sums of numbers</h1>
      <div className="sums__paragraphs">
        <Sum a={2} b={3} />
        <Sum a={-5} b={5} />
        <Sum a={10} />
        <Sum b={5} />
        <Sum />
      </div>
    </div>

  </section>
);

export default App;
