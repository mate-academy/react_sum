import React from 'react';
import './App.scss';
import { Sum } from './components/Sum/Sum';
import { Person } from './components/Person/Person';

const misha = {
  name: 'Миша',
  age: 30,
  sex: 'm',
  isMarried: true,
  wife: 'Анна',
};

const anna = {
  name: 'Анна',
  age: 28,
  sex: 'f',
  isMarried: true,
  husband: 'Миша',
};

const vasya = {
  name: 'Вася',
  sex: 'm',
  isMarried: false,
};

export const App = () => (
  <>
    <Sum a={2} b={3} />
    <Sum a={-5} b={5} />
    <Sum a={10} />
    <Sum b={5} />
    <Sum />

    <Person person={misha} />
    <Person person={anna} />
    <Person person={vasya} />
  </>
);
