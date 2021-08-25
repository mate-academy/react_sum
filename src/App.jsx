import React from 'react';
import './App.scss';
import { Sum } from './components/Sum';

export const App = () => (
  <main className="main">
    <Sum a ={2} b ={3} />
    <Sum a ={-5} b ={5} />
    <Sum a ={10} />
    <Sum b ={5} />
    <Sum />
  </main>
);
