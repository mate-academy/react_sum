import React from 'react';
import './App.css';
import { Sum } from './components/Sum/Sum';

export const App = () => (
  <div className="App">
    <Sum
      a={2}
      b={3}
    />

    <br />

    <Sum
      a={-5}
      b={5}
    />

    <br />

    <Sum
      a={10}
    />

    <br />

    <Sum
      b={5}
    />

    <br />

    <Sum />
  </div>
);
