import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Sum from './components/Sum';

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);

ReactDOM.render(
  <Sum a={3} b={4} />,
  document.getElementById('root'),
);
