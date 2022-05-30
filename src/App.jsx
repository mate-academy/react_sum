// import { props } from 'cypress/types/bluebird';
import React from 'react';
import './App.scss';
import { Sum } from './components/Sum';

const values = {
  a: 2,
  b: 5,
};

const values1 = {
  a: -5,
  b: 5,
};

const values2 = {
  a: 10,
  b: 0,
};

const values3 = {
  a: 0,
  b: 5,
};

const values4 = {
  a: 0,
  b: 0,
};

const App = () => (
  <>
    <Sum a={values.a} b={values.b} />
    <Sum a={values1.a} b={values1.b} />
    <Sum a={values2.a} b={values2.b} />
    <Sum a={values3.a} b={values3.b} />
    <Sum a={values4.a} b={values4.b} />
  </>
);

export default App;
