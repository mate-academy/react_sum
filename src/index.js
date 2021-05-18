import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <>
    <App a={2} b={2} />
    <App a={10} b={0} />
    <App a={-5} b={5} />
  </>,
  document.getElementById('root'),
);
