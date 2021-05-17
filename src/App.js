import React from 'react';
import PropTypes from 'prop-types';
import './App.scss';

const App = ({ a, b }) => (
  <p className="text">
    Sum of
    {' '}
    <strong>{a}</strong>
    {' '}
    and
    {' '}
    <strong>{b}</strong>
    {' '}
    is
    {' '}
    <strong>{a + b}</strong>
  </p>
);

App.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
};

export default App;
