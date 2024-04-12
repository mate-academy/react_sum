import React from 'react';
import './App.scss';
import { Sum } from './components/Sum/Sum';

export const App = () => (
  <>
  <Sum
  a={3}
  b={5}/>
    <Sum
  a={-5}
  b={5}/>
    <Sum
  a={10}
  b={10}/>
    <Sum
  a={0}
  b={5}/>
    <Sum
  a={0}
  b={0}/>
  </>
);
