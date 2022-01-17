import React from 'react';
import './App.scss';
import { Sum } from './components/Sum';

const App = () => (
  <>
    <p><Sum a={2} b={3} />
    <p><Sum a={-5} b={5} />
    <p><Sum a={10} />
    <p><Sum b={5} />
    <p><Sum />
  </>
);

export default App;
