import React from 'react';
import './App.scss';
import { Sum } from './components/Sum/Sum';

export const App = () => (
  <>
    <Sum numA={2} numB={3} />
    <Sum numA={-5} numB={5} />
    <Sum numA={10} numB={0} />
    <Sum numA={0} numB={5} />
    <Sum numA={0} numB={0} />
    {/* Replace paragraphs with Sum componets */}
    {/* And remove commented lines :) */}
  </>
);
