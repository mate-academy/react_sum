import React from 'react';
import './App.scss';
import PropTypes from 'prop-types';

const App = ({ a, b }) => (
  <p>
    Sum
    of
    {' '}
    {a}
    {' '}
    and
    {' '}
    {b}
    {' '}
    is
    {' '}
    {a + b}
  </p>
);

App.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
};

export default App;
