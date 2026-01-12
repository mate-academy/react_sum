import React from 'react';
import './App.scss';
import { Sum } from './components/Sum/Sum';

export const App = () => (
  <>
    <Sum a={2} /> <Sum b={3} />
    <Sum a={-5} /> <Sum b={5} />
    <Sum a={10} /> <Sum />
    <Sum /> <Sum b={5} />
    <Sum /> <Sum />
    {/* Replace paragraphs with Sum componets */}
    {/* And remove commented lines :) */}
  </>
);
