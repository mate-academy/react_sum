import React from 'react';
import './App.css';
import Sum from './components/Sum';

const setOfArgs = [[2, 2], [10, 0], [-5, 5]];

const App = () => (
  <div className="App">
    <h1>Sum Component</h1>
    <hr />

    {setOfArgs.map((args) => {
      const [argA, argB] = args;

      return <Sum key={Math.random().toString()} a={argA} b={argB} />;
    })}
  </div>
);

export default App;
