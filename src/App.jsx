import React from 'react';
import './App.css';

import { Sum } from './components/Sum';

export const App = () => (
  <>
    <Sum firstValue={2} secondValue={3} />
    <Sum firstValue={-5} secondValue={5} />
    <Sum firstValue={10} />
    <Sum secondValue={5} />
  </>
);
