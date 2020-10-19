import React from 'react';
import Sum from './components/Sum/Sum';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <div className="container">
    <h1 className="display-3">React sum</h1>
    <ul className="list-group">
      <Sum a={2} b={2} />
      <Sum a={10} b={0} />
      <Sum a={5} b={-5} />
    </ul>
  </div>
);

export default App;
