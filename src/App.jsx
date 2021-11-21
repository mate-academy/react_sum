import React from 'react';
import './App.scss';

import { Sum } from './components/Sum';

const App = () => (
  <div className="container">
    <div className="calculation">
      <Sum a={2} b={5} />
      <Sum a={-5} b={5} />
      <Sum a={10} b={0} />
      <Sum a={0} b={5} />
      <Sum a={0} b={0} />
    </div>
  </div>
);

export default App;
