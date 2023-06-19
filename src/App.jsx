import React from 'react';
import { Sum } from './components/Sum/Sum';
import './App.css';

export const App = () => (
  <>
    <Sum
      a = {3}
      b = {2}
    />

    <Sum
      a = {-5}
      b = {5}
    />

    <Sum
      a = {10}
    />

    <Sum
      b = {5}
    />

    <Sum />
  </>
);
