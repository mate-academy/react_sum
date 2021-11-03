import React from 'react';
import { Sum } from './components/Sum';
import './App.scss';

const App = () => (
  <>
    <p><Sum a={2} b={3} /></p>
    <p><Sum a={-5} b={5} /></p>
    <p><Sum a={10} b={0} /></p>
    <p><Sum a={0} b={5} /></p>
    <p><Sum a={0} b={0} /></p>
  </>
);

export default App;
