import React from 'react';
import './App.scss';
import { Sum } from './components/Sum/Sum';

export const App = () => (
  <>
    <Sum a={2} b={3} />
    <Sum a={-5} b={5} />
    <Sum a={10} />
    <Sum b={5} />
    <Sum />
  </>
);

// The App should contain the next Sum components:

// a = 2 and b = 3;
// a = -5 and b = 5;
// just a = 10;
// just b = 5;
// no params at all.
