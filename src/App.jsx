import React from 'react';
import './App.css';
import { Sum } from './components/Sum';

export const App = () => (
  <>
    <Sum
      a={2}
      b={4}
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
