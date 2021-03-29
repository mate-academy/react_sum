import React from 'react';
import Sum from './components/Sum';
import './App.scss';

function App() {
  const nums = [
    [2, 2],
    [10, 0],
    [-5, 5],
  ];

  return (
    <>
      <h1>React Sum</h1>
      <Sum nums={nums[0]} />
      <Sum nums={nums[1]} />
      <Sum nums={nums[2]} />
    </>
  );
}

export default App;
