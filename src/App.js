import React from 'react';
import './App.scss';
import SumBlock from './components/SumBlock';

const App = () => (
  <div className="reactSum">
    <h1 className="pageTitle">React sum</h1>
    <SumBlock
      a={2}
      b={2}
    />
    <SumBlock
      a={10}
      b={0}
    />
    <SumBlock
      a={-5}
      b={5}
    />
  </div>
);

export default App;
