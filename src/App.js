import React from 'react';
import './App.scss';
import Sum from './components/Sum';
import Amount from './components/Amount';

const App = () => (

  // Amount it's a component for
  // (from readme) => "accepting props `a` and `b`"

  // Sum it's a component for
  // (from readme) => "for `2 + 2`, `10 + 0` and `-5 + 5`"

  // I will delete a redundant component,
  // but now I don't which one you need and which one - nope)

  <>
    <h1>React sum</h1>
    <Sum text="2 + 2" />
    <Sum text="10 + 0" />
    <Sum text="-5 + 5" />

    <Amount a="2" b="2" />
    <Amount a="10" b="0" />
    <Amount a="-5" b="5" />
  </>
);

export default App;
