import React from 'react';
import './App.css';
import Sum from './components/Sum';

const App = () => (
  <div>
    <Sum firstValue={2} secondValue={1} />
    <Sum firstValue={2} secondValue={2} />
    <Sum firstValue={10} secondValue={0} />
    <Sum firstValue={2} secondValue={1} />
  </div>
);

export default App;
