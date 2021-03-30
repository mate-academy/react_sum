import React from 'react';
import { Sum } from './components/Sum';

import './app.scss';

const App = () => (
  <>
    <h1 className="titleOfSum">React sum</h1>
    <Sum a={2} b={2} />
    <Sum a={10} b={0} />
    <Sum a={-5} b={5} />
  </>
);

export { App };
