import React from 'react';
import './App.scss';
import { Sum } from './components/Sum';

const App = () => (
  <>
    <Sum
      n1={2}
      n2={3}
    />

    <Sum
      n1={-5}
      n2={5}
    />

    <Sum
      n1={10}
    />

    <Sum
      n2={5}
    />

    <Sum />
  </>
);

export default App;
