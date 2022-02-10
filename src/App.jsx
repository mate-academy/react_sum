import React from 'react';
import './App.scss';
import { Sum } from './components/Sum';

const random = () => Math.trunc(Math.random() * 10);

const App = () => (
  <>
    <Sum a={random()} b={random()} />
    <Sum a={5} b={5} />
    <Sum a={2} b={5} />
    <Sum b={5} />
    <Sum a={18} />
    <Sum />
  </>
);

export default App;
