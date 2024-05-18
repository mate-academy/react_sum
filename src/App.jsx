import React from 'react';
import './App.scss';
import { Sum } from './components/Sum/Sum';

export const App = () => (
  <>
    <Sum a={2} b={3}></Sum>
    <Sum a={-5} b={5}></Sum>
    <Sum a={10}></Sum>
    <Sum b={5}></Sum>
    <Sum></Sum>
  </>
);
