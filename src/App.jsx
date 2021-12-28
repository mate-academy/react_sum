import React from 'react';
import './App.scss';

const App = () => (
  <>
    <Sum a={2} b={3} />
    <Sum a={5} b={-5} />
    <Sum a={10} />
    <Sum b={5} />
    <Sum />
  </>
);

const Sum = ({ a = 0, b = 0 }) => (
  <p>{`Sum of ${a} and ${b} is ${a + b}`}</p>
);

export default App;
