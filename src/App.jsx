import React from 'react';
import './App.css';
import { Sum } from './components/Sum';

export const App = () => (
  <>
    <p><Sum a={2} b={3} /></p>
    <p><Sum a={-5} b={5} /></p>
    <p><Sum a={10} /></p>
    <p><Sum b={5} /></p>
    <p><Sum /></p>
  </>
);
