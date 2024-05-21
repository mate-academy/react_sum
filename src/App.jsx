import React from 'react';
import './App.scss';
import { Sum } from './components/Sum/Sum';

export const App = () => (
  <>
    <Sum a={-5} b={5} />
    <Sum a={10} b />
    <Sum a b={5} />
    <Sum a b />
  </>
);
