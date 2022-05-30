import React from 'react';
import './App.scss';
import Sum from './components/Sum';
import SumProps from './components/SumProps';

const App = () => (
  <>
    <Sum
      a={SumProps.sum1.a}
      b={SumProps.sum1.b}
    />

    <Sum
      a={SumProps.sum2.a}
      b={SumProps.sum2.b}
    />

    <Sum
      a={SumProps.sum3.a}
      b={SumProps.sum3.b}
    />

    <Sum
      a={SumProps.sum4.a}
      b={SumProps.sum4.b}
    />

    <Sum
      a={SumProps.sum5.a}
      b={SumProps.sum5.b}
    />
  </>
);

export default App;
