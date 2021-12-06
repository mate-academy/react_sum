import React from 'react';
import './App.scss';
import { Sum } from './components/Sum';

const App = () => (
  <div className="list">
    <Sum
      a={2}
      b={3}
    />
    <Sum
      a={5}
      b={-5}
    />
    <Sum
      a={2}
    />
    <Sum
      b={5}
    />
    <Sum />
  </div>
);

export default App;
