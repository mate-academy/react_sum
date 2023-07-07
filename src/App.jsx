import React from 'react';
import './App.css';
import { Sum } from './components/Sum/Sum';

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
      b={undefined}
    />
    <Sum
      a={undefined}
      b={5}
    />
    <Sum
      a={undefined}
      b={undefined}
    />
  </>
);
