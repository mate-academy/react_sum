import React from 'react';
import './App.scss';
import Sum from './components/Sum';

const App = () => (
  <>
    <Sum
      firstElement={2}
      secondElement={2}
    />
    <Sum
      firstElement={10}
      secondElement={0}
    />
    <Sum
      firstElement={-5}
      secondElement={5}
    />
  </>
);

export default App;
