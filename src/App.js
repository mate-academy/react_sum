import React from 'react';
import './App.scss';
import Sum from './components/Sum';

const input = [[2, 2], [10, 0], [-5, 5]];

const App = () => (
  <>
    {
      input.map(item => (
        <Sum
          key={item.toString()}
          a={item[0]}
          b={item[1]}
        />
      ))
    }
  </>
);

export default App;
