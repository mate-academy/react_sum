import React from 'react';
import './App.scss';
import { Sum } from './components/Sum';

const App = () => (
  <div className="sum sum__container">
    <div className="sum sum__block">
      <Sum a={2} b={3} />
      <Sum a={-5} b={5} />
      <Sum a={10} />
      <Sum b={5} />
      <Sum />
    </div>
  </div>
);

export default App;
