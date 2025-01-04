import React from 'react';
import { Sum } from './components/Sum/Sum';
import './App.scss';

export const App = () => (
  <>
    <Sum a={2} b={3} />
    <Sum a={-5} b={5} />
    <Sum a={10} />
    <Sum  b={5} />
    <Sum />
  </>
);
