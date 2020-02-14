import React from 'react';
import './App.css';
import Sum from './components/Sum';

const App = () => (
  <main>
    <Sum
      first={2}
      second={2}
    />
    <Sum
      first={10}
      second={0}
    />
    <Sum
      first={-5}
      second={5}
    />
  </main>
);

export default App;
