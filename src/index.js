import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <App a="2" b="3" />,
  document.getElementById('root'),
);

ReactDOM.render(
  <App a="10" b="0" />,
  document.getElementById('root'),
);

ReactDOM.render(
  <App a="2" b="3" />,
  document.getElementById('root'),
);
