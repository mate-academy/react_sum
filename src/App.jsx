import React from 'react';
// eslint-disable-next-line
import { Sum } from './components/Sum/';

import './App.scss';

export const App = () => (
  <>
    <Sum
      a={2}
      b={3}
    />

    <Sum
      a={-5}
      b={5}
    />
    <Sum
      a={10}
    />

    <Sum
      b={5}
    />

    <Sum />
  </>
);
