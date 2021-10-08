import React from 'react';
import './App.scss';
import Summ from './components/Sum';

const App = () => (
  <>
    <Summ a={2} b={3} />
    <Summ a={-5} b={5} />
    <Summ a={10} />
    <Summ b={5} />
    <Summ />
  </>
);

export default App;
