import React from 'react';
import { Sum } from './components/Sum';

import './App.css';

export const App = () => (
  <>
    <Sum a={2} b={3} />
    <p />
    <Sum a={-5} b={5} />
    <p />
    <Sum a={10} />
    <p />
    <Sum b={5} />
    <p />
    <Sum />
  </>
);
