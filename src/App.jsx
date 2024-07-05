import React from 'react';
import './App.scss';
import {Sum} from './components/Sum/Sum';

export const App = () => (
  <>
    <Sum a={3} b={5} />
    <Sum a={-5} b={5} />
    <Sum a={10} />
    <Sum b={5} />
    <Sum />
  </>
);
