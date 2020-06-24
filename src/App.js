import React from 'react';

import Sum from './components/Sum';
import './App.css';

const App = () => (
  <React.Fragment>
    <Sum a={2} b={2} />
    <Sum a={10} b={0} />
    <Sum a={-5} b={5} />
  </React.Fragment>
);

export default App;
