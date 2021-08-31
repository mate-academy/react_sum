import React from 'react';
import { Sum } from './components/Sum';
import './App.scss';

const App = () => (
  <>
    <Sum a={1} b={2} />
    <Sum a={-5} b={5} />
    <Sum a={10} />
    <Sum b={2} />
    <Sum />
  </>
);

export default App;
