import React from 'react';
import Sum from './components/Sum';
import './App.scss';

const App = () => (
  <>
    <Sum a={2} b={1} />
    <Sum a={10} b={13} />
    <Sum a={13} b={25} />
  </>
);

export default App;
