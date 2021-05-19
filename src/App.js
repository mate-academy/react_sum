import React from 'react';
import './App.scss';
import Text from './components/Sum';

const App = () => (
  <div className="app">
    <h1>React sum</h1>
    <Text a={2} b={2} />
    <Text a={10} b={0} />
    <Text a={-5} b={5} />
  </div>
);

export default App;
