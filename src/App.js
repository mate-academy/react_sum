import React from 'react';
import { Sum } from './components/Sum';
import './app.scss';

const App = () => (
  <>
    <h1>React sum</h1>
    <Sum numberA={2} numberB={2} />
    <Sum numberA={10} numberB={0} />
    <Sum numberA={-5} numberB={5} />
  </>
);

export default App;
