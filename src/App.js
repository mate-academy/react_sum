import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

const App = ({ a, b }) => (
  <h1>
    {
      `Sum of ${a} and ${b} is ${a + b}`
    }
  </h1>
);

App.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
};

export default App;
