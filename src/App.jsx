import React from 'react';
import './App.scss';

import { Sum } from './components/Sum/Sum';

export const App = () => (
  <>
    <Sum
      firstTitle="Sum of "
      secondTitle="and"
      sumTitle="is"
      num1={2}
      num2={3}
    />
    <Sum
      firstTitle="Sum of "
      secondTitle="and"
      sumTitle="is"
      num1={-5}
      num2={5}
    />
    <Sum firstTitle="Sum of " secondTitle="and" sumTitle="is" num1={10} />
    <Sum firstTitle="Sum of " secondTitle="and" sumTitle="is" num2={5} />
    <Sum firstTitle="Sum of " secondTitle="and" sumTitle="is" />
  </>
);
