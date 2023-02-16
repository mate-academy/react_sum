import React from 'react';
import './App.css';
import Sum from './components/Sum';

export const num = {
  a: 2,
  b: 3,
};

export const App = () => (
  <>
    <Sum {...num} />

  </>
);
