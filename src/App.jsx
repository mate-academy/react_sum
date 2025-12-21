import React from 'react';
import './App.scss';
import { Sum } from './components/Sum/Sum';

export const App = () => (
  <>
    <Sum a={7} b={10} />
    <Sum a={6} b={-4} />
    <Sum a={-40} b={-2} />
    <Sum a={0} b={5} />
    <Sum a={0} b={0} />
    {/* Replace paragraphs with Sum componets */}
    {/* And remove commented lines :) */}
  </>
);
