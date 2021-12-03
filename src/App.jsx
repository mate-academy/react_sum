import React from 'react';
import './App.scss';
import { Calc } from './components/Sum';

const App = () => (
  <>
    <Calc a={2} b={3} />
    <Calc a={-5} b={5} />
    <Calc a={10} />
    <Calc b={5} />
    <Calc />
  </>
);

export default App;
