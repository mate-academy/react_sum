import React from 'react';
import './App.scss';

import Sum from './components/Sum';

const App = () => (
  <section className="addNumbers">
    <h1 className="addNumbers__title">React sum</h1>
    <Sum a={2} b={2} />

    <Sum a={10} b={0} />

    <Sum a={-5} b={5} />
  </section>
);

export default App;
