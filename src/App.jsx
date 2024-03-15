import './App.scss';

import React from 'react';
import { Sum } from './components/Sum/Sum';

const data = [{ a: 2, b: 3 }, { a: -5, b: 5 }, { a: 10 }, { b: 5 }, {}];

export const App = () => (
  <>
    {data.map(props => (
      <Sum key={new Date()} {...props} />
    ))}
  </>
);
