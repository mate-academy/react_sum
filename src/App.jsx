import React from 'react';
import './App.scss';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { Sum } from './components/Sum/Sum';

export const App = () => (
  <>
    <Sum a={2} b={3} />
    <Sum a={-5} b={5} />
    <Sum a={10} b={0} />
    <Sum b={5} />
    <Sum />
  </>
);
