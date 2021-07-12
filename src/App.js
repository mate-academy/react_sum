import React from 'react';
import Sum from './components/Sum';
import './App.scss';

const App = () => (
  <div>
    <Sum left={2} right={2} />
    <Sum left={10} right={0} />
    <Sum left={-5} right={5} />
  </div>
);

export default App;
