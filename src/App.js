import React from 'react';
import './App.scss';
import Sum from './components/Sum';

const App = () => (
  <>
    <h1>
      Sum of 2 and 2
      <Sum
        firstElement={2}
        secondElement={2}
      />
    </h1>
    <h1>
      Sum of 10 and 0
      <Sum
        firstElement={10}
        secondElement={0}
      />
    </h1>
    <h1>
      Sum of -5 and 5
      <Sum
        firstElement={-5}
        secondElement={5}
      />
    </h1>
  </>
);

export default App;
