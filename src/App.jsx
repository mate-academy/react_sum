import React from 'react';
import './App.scss';
import { Sum as Add } from './components/Sum/Sum';

export const App = () => (
  <>
    <Add a={2} b={3} />
    <Add a={-5} b={5} />
    <Add a={10} b={0} />
    <Add a={0} b={5} />
    <Add a={0} b={0} />
  </>
);
