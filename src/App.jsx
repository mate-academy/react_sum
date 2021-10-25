import React from 'react';
import Sum from './components/Sum';
import './App.scss';

const App = () => (
  <>
    <p>
      <Sum a={2} b={3} />
    </p>
    <p>
      <Sum a={-5} b={5} />
    </p>
    <p>
      <Sum a={10} />
    </p>
    <p>
      <Sum b={5} />
    </p>
    <p>
      <Sum />
    </p>
    {/* Replace paragraphs with Sum componets */}
    {/* And remove comment lines :) */}
  </>
);

export default App;
