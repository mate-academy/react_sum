import React from 'react';
import PropTypes from 'prop-types';
import './App.scss';
import Sum from './components/Sum';

const App = ({ a, b }) => (
  <section>
    <h1>React sum</h1>
    <Sum a={2} b={3} />
    <Sum a={10} b={0} />
    <Sum a={-5} b={5} />
  </section>
);

App.propTypes = {
  a: PropTypes.string.isRequired,
  b: PropTypes.string.isRequired,
};

export default App;
