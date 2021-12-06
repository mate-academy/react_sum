import React from 'react';
import './App.scss';
import { Sum } from './components/Sum';

const App = () => (
  <>
    <Sum a={2} b={3} />
    <Sum a={-5} b={5} />
    <Sum a={10} b={0} />
    <Sum a={0} b={5} />
    <Sum a={0} b={0} />
    {/* Replace paragraphs with Sum componets */}
    {/* And remove comment lines :) */}
  </>
);

export default App;
