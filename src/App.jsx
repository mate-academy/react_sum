import React from 'react';
import { Sum } from './components/Sum';
import './App.scss';

const App = () => (
  <>
    <Sum a={2} b={5} />
    <Sum a={-5} b={5} />
    <Sum a={10} />
    <Sum b={5} />
    <Sum />
  </>
);

export default App;
