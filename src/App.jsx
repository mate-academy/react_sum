import React from 'react';
import './App.scss';
import { Sum } from './components/Sum/Sum';

export const App = () => (
  <>
    <Sum a={2} b={3} />
    <Sum a={-5} b={5} />
    <Sum a={10} />
    <Sum b={5} />
    <Sum />
    <p>Sum of -5 and 5 is 0</p>
    <p>Sum of 10 and 0 is 10</p>
    <p>Sum of 0 and 5 is 5</p>
    <p>Sum of 0 and 0 is 0</p>
    {/* Replace paragraphs with Sum componets */}
    {/* And remove commented lines :) */}
  </>
);
