import React from 'react';
import './App.scss';
import { Sum } from './components/Sum/Sum';

export const App = () => (
  <>
    <Sum numOne={2} numTwo={3} sum={5} />
    <Sum numOne={-5} numTwo={5} sum={0} />
    <Sum numOne={10} numTwo={0} sum={10} />
    <Sum numOne={0} numTwo={5} sum={5} />
    <Sum numOne={0} numTwo={0} sum={0} />
    {/* Replace paragraphs with Sum componets */}
    {/* And remove commented lines :) */}
  </>
);
