import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

export const numbers1 = {
  a: 2,
  b: 3,
};

export const numbers2 = {
  a: -5,
  b: 5,
};

export const numbers3 = {
  a: 10,
  b: 0,
};

export const numbers4 = {
  a: 0,
  b: 5,
};

export const numbers5 = {
  a: 0,
  b: 0,
};

ReactDOM.render(
  <div>
    <App {...numbers1} />
    <App {...numbers2} />
    <App {...numbers3} />
    <App {...numbers4} />
    <App {...numbers5} />
  </div>,

  document.getElementById('root'),
);

numbers1.defaultProps = {
  a: 0,
  b: 0,
};

numbers2.defaultProps = {
  a: 0,
  b: 0,
};

numbers3.defaultProps = {
  a: 0,
  b: 0,
};

numbers4.defaultProps = {
  a: 0,
  b: 0,
};

numbers5.defaultProps = {
  a: 0,
  b: 0,
};
