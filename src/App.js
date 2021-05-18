import React from 'react';
import './App.scss';
import PropTypes from 'prop-types';
import Sum from './components/Sum';

const App = () => (
  <div className="app">
    <h1>React sum</h1>
    <Text a={2} b={2} />
    <Text a={10} b={0} />
    <Text a={-5} b={5} />
  </div>
);

const Text = ({ a, b }) => (
  <p className="text">
    {`Sum of ${a} and ${b} is ${Sum(a, b)}`}
  </p>
);

Text.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
};

export default App;
