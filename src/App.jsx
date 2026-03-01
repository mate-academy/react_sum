import React from 'react';
import './App.scss';
import { Sum } from './components/Sum/Sum';

export const App = () => (
  <>
    <Sum val1={2} val2={3} />
    <Sum val1={-5} val2={5} />
    <Sum val1={10} val2={0} />
    <Sum val1={0} val2={5} />
    <Sum val1={0} val2={0} />
  </>
);
