import React from 'react';
import './App.scss';
import { Sum } from './Sum';

const App = () => (
  <>
    <Sum a="2" b="3" />
    <Sum a="-5" b="5" />
    <Sum a="10" />
    <Sum b="5" />
    <Sum />
    {/* Replace paragraphs with Sum componets */}
    {/* And remove comment lines :) */}
  </>
);

export default App;
