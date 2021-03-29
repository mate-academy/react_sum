import React from 'react';
import './App.scss';
import Sum from './components/Sum';

const input = [[2, 2], [10, 0], [-5, 5]];

const App = () => (
  <React.Fragment>
    {
      input.map(item => (
        <Sum
          a={item[0]}
          b={item[1]}
        />
      ))
    }
  </React.Fragment>
);

export default App;
