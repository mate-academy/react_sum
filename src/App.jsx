import React from 'react';
import './App.scss';
import { Sum } from './components';

const App = () => (
  <>
    <Sum a={2} b={3} />
    <Sum a={5} b={10} />
    <Sum a={10} />
    <Sum b={5} />
    <Sum />
  </>
);

export default App;
