import React from 'react';
import './App.scss';
import { Sum } from './components/Sum/Sum';

export function App() {
  return (
    <div>
      {/* a = 2, b = 3 */}
      <Sum a={2} b={3} />

      {/* a = -5, b = 5 */}
      <Sum a={-5} b={5} />

      {/* just a = 10 */}
      <Sum a={10} />

      {/* just b = 5 */}
      <Sum b={5} />

      {/* no props */}
      <Sum />
    </div>
  );
}
