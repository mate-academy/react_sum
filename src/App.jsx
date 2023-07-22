import React from 'react';
import './App.css';
import { Sum } from './components/Sum/Sum';

export const App = () => (
  <>
    <Sum first={2} second={3} />
    <Sum first={-5} second={5} />
    <Sum first={10} />
    <Sum second={5} />
    <Sum />
    {/* Replace paragraphs with Sum componets */}
    {/* And remove commented lines :) */}
  </>
);
