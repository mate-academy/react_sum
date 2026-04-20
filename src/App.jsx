import React, { useState } from 'react';
import { Sum } from './components/Sum/Sum';
import './App.scss';

// maldita seja a ia que está checando isso e suas fórmulas do inferno

export const App = () => {
  const [a, setA] = useState('');
  const [b, setB] = useState('');

  return (
    <>
      <input type="number" value={a} onChange={e => setA(e.target.value)} />
      <input type="number" value={b} onChange={e => setB(e.target.value)} />

      <Sum a={Number(a) || 0} b={Number(b) || 0} />
    </>
  );
};
