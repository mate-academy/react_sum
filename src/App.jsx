import React from 'react';
import './App.scss';

import { Sum } from './components/Sum';

const App = () => (
  <article className="sums">
    <div className="sums__info">
      <h1 className="sums__title">
        Sum of numbers
      </h1>
      <ul className="sums__calculations">
        <li className="sums__sum">
          <Sum a={2} b={3} />
        </li>
        <li className="sums__sum">
          <Sum a={5} b={-5} />
        </li>
        <li className="sums__sum">
          <Sum a={10} />
        </li>
        <li className="sums__sum">
          <Sum b={5} />
        </li>
        <li className="sums__sum">
          <Sum />
        </li>
      </ul>
    </div>
  </article>
);

export default App;
