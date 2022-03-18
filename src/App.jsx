import React from 'react';

import './App.scss';

import { Sum } from './components/Sum';

const App = () => (
  <>
    <Sum valA={2} valB={3} />
    <Sum valA={-5} valB={5} />
    <Sum valA={10} />
    <Sum valB={5} />
    <Sum />
  </>
);

export { App };
