import React from 'react';
import './App.scss';
import Sum from './components/Sum';

const App = () => (
  <>
    <h1 className="title">React sum</h1>
    <article className="sum">
      <p className="sum--1"><Sum a={2} b={2} /></p>
      <p className="sum--2"><Sum a={10} b={0} /></p>
      <p className="sum--3"><Sum a={-5} b={5} /></p>
    </article>
  </>
);

export default App;
