import React from 'react';
import './App.scss';
import { Sum } from './components/Sum/Sum'

export const App = () => (
  <>
    <Sum
      a={2}
      b={3}
      result={5}
    />
    <Sum
      a={-5}
      b={5}
      result={0}
    />
    <Sum
      a={10}
      result={10}
    />
    <Sum
      b={5}
      result={5}
    />
    <Sum
      result={0}
    />
  </>
);
