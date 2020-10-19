import React from 'react';
import Sum from './components/Sum';
import './App.scss';

const App = () => (
  <div className="actile">
    <h1 className="actile__title">React sum</h1>

    <Sum
      a={2}
      b={2}
    />

    <Sum a={10} />

    <Sum
      a={-5}
      b={5}
    />
  </div>
);

export default App;
