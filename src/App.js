import React from 'react';
import './App.css';
import Sum from './components/Sum';

const App = () => ((
  <div>
    <Sum a={2} b={2} />
    <Sum a={10} b={0} />
    <Sum a={-5} b={5} />
  </div>
)
);

export default App;
