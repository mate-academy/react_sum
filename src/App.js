import React from 'react';
import Sum from './components/Sum';
import './App.scss';

function App() {
  return (
    <main className="app">
      <h1 className="app__header">React sum</h1>
      <Sum a={2} b={2} />
      <Sum a={10} b={0} />
      <Sum a={-5} b={5} />
    </main>
  );
}

export default App;
