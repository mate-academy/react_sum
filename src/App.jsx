import React from 'react';
import './App.scss';


export const App = ({ a = 0, b = 0 }) => {
  return <p>Sum of {a} and {b} is {a + b}</p>;
};

