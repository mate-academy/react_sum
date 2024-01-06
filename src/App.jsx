import React from 'react';
import './App.scss';
import { Sum } from './components/Sum/Sum';

function App() {
  const dataArray = [{ a: 2, b: 3 }, { a: -5, b: 5 }, { a: 10 }, { b: 5 }, {}];

  const elements = dataArray.map((el, i) => <Sum a={el.a} b={el.b} />);

  return <div>{elements}</div>;
}

export { App };
