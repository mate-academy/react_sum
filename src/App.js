import React from 'react';
import './App.scss';
import Sum from './components/Sum';

const App = () => (
  <>
    <h1>React sum</h1>
    <Sum
      firstValue={2}
      secondValue={2}
    />
    <Sum
      firstValue={10}
      secondValue={0}
    />
    <Sum
      firstValue={-5}
      secondValue={5}
    />
  </>
);

export default App;
