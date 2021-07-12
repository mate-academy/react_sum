import React from 'react';
import Sum from './components/Sum';

import './App.scss';

const App = () => (
  <>
    <h1>React sum</h1>
    <Sum
      a={2}
      b={2}
    />
    <Sum
      a={10}
    />
    <Sum
      a={-5}
      b={5}
    />
  </>
);

export default App;
