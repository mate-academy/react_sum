import React from 'react';
import './App.scss';
import { Sum } from './components/Sum';

const App = () => (
  <>
    <Sum />
    <Sum a={-5} b={5} />
    <Sum a={2} b={3} />
    <Sum b={5} />
    <Sum a={10} />
  </>
);

export default App;
