import React from 'react';
import './App.css';

export const App = ({ a, b }) => (
  <>
    <p>
      Sum of
      {' '}
      {a}
      {' '}
      and
      {' '}
      {b}
      {' '}
      is
      {' '}
      {a + b}
      {' '}
    </p>
  </>
);
