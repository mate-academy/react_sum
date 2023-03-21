import React from 'react';
import './App.css';
import { Sum } from './components/Sum';

export const App = () => (
  <>
    {Sum(2, 3)}
    {Sum(-5, 5)}
    {Sum(10)}
    {Sum(5)}
    {Sum()}

  </>
);
