
import React, { Fragment } from 'react';
import './App.css';
import Sum from './components/Sum';

const App = () => (

  <Fragment>
    <h1>React sum</h1>
    <Sum a={2} b={2} />
    <Sum a={10} b={0} />
    <Sum a={-5} b={5} />
  </Fragment>

);

export default App;
