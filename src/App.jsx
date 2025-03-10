import React from 'react';
import './App.scss';
import { Sum } from './components/Sum/Sum';

export const App = () => (
  <>
    <Sum of a = {2} and b ={3}/>
    <Sum of a = {-5} and b = {5} />
    <Sum of a = {10} />
    <Sum of b = {5} />
    <Sum />
  </>
);
