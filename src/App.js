import React from 'react';
import PropTypes from 'prop-types';
import './App.scss';

const App = ({ a, b }) => (
  <section>
    <h1>React sum</h1>
    <div>{+a + +b}</div>
  </section>
);

App.propTypes = {
  a: PropTypes.string.isRequired,
  b: PropTypes.string.isRequired,
};

export default App;
