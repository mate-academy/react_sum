import React from 'react';
import './App.scss';
import Sum from './components/Sum';

const App = () => (
  <div>
    <h1>React sum</h1>
    <Sum
      expression={{
        x: 2, y: 2,
      }}
    />
    <Sum
      expression={{
        x: 10, y: 0,
      }}
    />
    <Sum
      expression={{
        x: -5, y: 5,
      }}
    />
  </div>
);

export default App;
