import React from 'react';
import './App.scss';

import { Sum } from './components/Sum';

const App = () => (
  <>
    <Sum
      firstNumber={2}
      secondNumber={3}
    />
    <Sum
      firstNumber={-5}
      secondNumber={5}
    />
    <Sum
      firstNumber={10}
      secondNumber={0}
    />
    <Sum
      firstNumber={0}
      secondNumber={5}
    />
    <Sum
      firstNumber={0}
      secondNumber={0}
    />
  </>
);

export default App;
