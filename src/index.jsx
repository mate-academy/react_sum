import React from 'react';
import ReactDom from 'react-dom';
import { App } from './App';
import { Sum } from './components/Sum/Sum';

ReactDom.render(
  <App>
    <Sum />
  </App>,
  document.getElementById('root'),
);
