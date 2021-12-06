import React from 'react';
import { Sum } from './components/Sum';

import './App.scss';

const App = () => (
  <ul className="list">
    <li className="list__item">
      <Sum a={2} b={5} />
    </li>

    <li className="list__item">
      <Sum a={-5} b={5} />
    </li>

    <li className="list__item">
      <Sum a={10} b={0} />
    </li>

    <li className="list__item">
      <Sum a={0} b={5} />
    </li>

    <li className="list__item">
      <Sum />
    </li>
  </ul>
);

export default App;
