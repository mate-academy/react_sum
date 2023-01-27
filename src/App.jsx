import React from 'react';
import './App.css';
import { Sum } from './components/Sum';

export const App = () => (
  <>
    <Sum a={10} b={7} />
    <Sum a={6} b={-4} />
    <Sum a={-40} b={-2} />
    <Sum a={6} />
    <Sum b={12} />
    <Sum />
  </>
);
