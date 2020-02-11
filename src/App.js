import React, { Fragment } from 'react';
import Sum from './components/Sum';
import './App.css';

const numbers = [{
  id: 'id-1', a: 2, b: 2,
}, {
  id: 'id-2', a: 10, b: 0,
}, {
  id: 'id-3', a: -5, b: 5,
}];

const App = () => (
  <Fragment>
    <Sum items={numbers} />
  </Fragment>
);

export default App;
