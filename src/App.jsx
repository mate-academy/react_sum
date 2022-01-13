import React from 'react';
import './App.scss';
import { Sum } from './components/Sum';

const App = () => (
  <>
    <p>
      <Sum
        a={3}
        b={2}
      />
    </p>
    <p>
      <Sum
        a={-5}
        b={5}
      />
    </p>
    <p>
      <Sum
        a={10}
      />
    </p>
    <p>
      <Sum
        b={10}
      />
    </p>
    <p>
      <Sum />
    </p>
  </>
);

export default App;
