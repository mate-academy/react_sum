import React from 'react';
import './App.css';
import { Sum } from './components/Sum/Sum';

export const App = () => (
  <>
    <Sum Sum a={2} b={3} />
    <Sum Sum a={-5} b={5} />
    <Sum Sum a={10} b={0} />
    <Sum Sum a={0} b={5} />
    <Sum Sum a={0} b={0} />
  </>
);
