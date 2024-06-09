import React from 'react';
import './App.scss';
import { Sum } from './components/Sum/Sum';

export const App = () => (
  <>
    <Sum numA={2} numB={3} />
    <Sum numA={-5} numB={5} />
    <Sum numA={10} />
    <Sum numA={5} />
    <Sum />
  </>
);
