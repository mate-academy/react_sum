import React from 'react';
import './App.scss';
import { Sum } from './components/Sum/Sum';

export const App = () => (
  <React.Fragment>
    <Sum a={2} b={3} />
    <Sum a={-5} b={5} />
    <Sum a={10} b={0} />
    <Sum a={0} b={5} />
    <Sum a={0} b={0} />
    <Sum a={7} b={10} />
    <Sum a={6} b={-4} />
    <Sum a={6} />
    <Sum b={12} />
    <Sum />
  </React.Fragment>
);
