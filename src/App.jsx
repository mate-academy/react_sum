import React from 'react';
import './App.scss';
import { Sum } from './components/Sum/Sum';

export const App = () => (
  <>
    <Sum a={2} and b={3} />
    <Sum a={-5} and b={5} />
    <Sum a={10} />
    <Sum b={5} />
    <Sum />
    {/* Replace paragraphs with Sum componets */}
    {/* And remove commented lines :) */}
  </>
);
