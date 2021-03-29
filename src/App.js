import React from 'react';
import './App.scss';
import Sum from './components/Sum';

const App = () => (
  <>
    <div className="block">
      <Sum
        a={2}
        b={2}
      />
    </div>
    <div className="block">
      <Sum
        a={10}
        b={0}
      />
    </div>
    <div className="block">
      <Sum
        a={-5}
        b={5}
      />
    </div>
  </>
);

export default App;
