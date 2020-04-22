import React from 'react';
import { Sum } from './components/Sum';
import './App.css';

const App = () => (
  <div className="wrapper">
    <Sum a={2} b={1} />
    <Sum a={2} b={2} />
    <Sum a={10} b={0} />
    <Sum a={5} b={-5} />
  </div>
);

export default App;
