import React from 'react';
import './App.scss';
import Sum from './components/Sum';

const App = () => (
  <div className="sum">
    <h1>React sum</h1>
    <Sum first={2} second={2} />
    <Sum first={10} second={0} />
    <Sum first={-5} second={5} />
  </div>
);

export default App;
