import React from 'react';
import Sum from './components/Sum';
import './App.scss';

const App = () => (
  <div className="container">
    <h1 className="container__title">React sum</h1>
    <ul className="container__list">
      <li>
        <Sum
          a={2}
          b={2}
        />
      </li>

      <li>
        <Sum
          a={10}
          b={0}
        />
      </li>

      <li>
        <Sum
          a={-5}
          b={5}
        />
      </li>
    </ul>
  </div>

);

export default App;
