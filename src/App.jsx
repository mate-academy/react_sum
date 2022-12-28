import React from 'react';
import './App.css';

import { Sum } from './components';

export const App = () => (
  <>
    <Sum a={2} b={5} />
    <Sum a={-5} b={5} />
    <Sum a={10} b={0} />
    <Sum a={0} b={5} />
    <Sum />
  </>
);
