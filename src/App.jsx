import React from 'react';
import './App.scss';
import { Sum as Text } from './components/Sum/Sum';

export const App = () => (
  <>
    <Text a={2} b={3} />
    <Text a={-5} b={5} />
    <Text a={10} />
    <Text b={5} />
    <Text />
  </>
);
