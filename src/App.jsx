import React from 'react';
import './App.scss';
import { Sum } from './components/Sum/Sum';

export const App = () => (
  <>
    <Sum first={2} second={3} />
    <Sum first={-5} second={5} />
    <Sum first={10} second={0} />
    <Sum first={0} second={5} />
    <Sum first={0} second={0} />
  </>
);
