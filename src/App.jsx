import React from 'react';
import './App.scss';

import Sum from './components/Sum';

const App = () => (
  <>
    {Sum(2, 3)}
    {Sum(5, -5)}
    {Sum(10)}
    {Sum(undefined, 5)}
    {Sum()}
  </>
);

export default App;
