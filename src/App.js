import React from 'react';
import './App.scss';
// eslint-disable-next-line import/extensions
import Sum from './components/Sum.jsx';

const first = {
  a: 2, b: 2,
};

const second = {
  a: 10, b: 0,
};

const third = {
  a: -5, b: 5,
};

const App = () => (
  <div className="App">
    <h1>React sum</h1>
    <Sum a={first.a} b={first.b} />
    <Sum a={second.a} b={second.b} />
    <Sum a={third.a} b={third.b} />
  </div>
);

export default App;
