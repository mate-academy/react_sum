import React from 'react';
import './App.scss';
import Sum from './components/Sum';

const App = () => (
  <main>
    <h1 className="title">React sum</h1>
    <div className="list">
      <Sum a={2} b={3} />
      <Sum a={10} b={0} />
      <Sum a={-5} b={5} />
    </div>
  </main>
);

export default App;
