import React from 'react';
import './App.scss';
import { Sum } from './components/Sum/Sum';

export const App = () => (
  <>
    {/* <p>Sum of 2 and 3 is 5</p> */}
    <Sum a={2} b={3} />
    {/* <p>Sum of -5 and 5 is 0</p> */}
    <Sum a={-5} b={5} />
    {/* <p>Sum of 10 and 0 is 10</p> */}
    <Sum a={10} b={0} />
    {/* <p>Sum of 0 and 5 is 5</p> */}
    <Sum a={0} b={5} />
    {/* <p>Sum of 0 and 0 is 0</p> */}
    <Sum a={0} b={0} />
    {/* Replace paragraphs with Sum componets */}
    {/* And remove commented lines :) */}
  </>
);
