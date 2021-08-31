import React from 'react';
import Sum from './components/Sum';

const App = () => (
  <>
    <Sum a={2} b={3} />
    <br />
    <Sum a={-5} b={5} />
    <br />
    <Sum a={10} />
    <br />
    <Sum b={5} />
    <br />
    <Sum />
  </>
);

export default App;
