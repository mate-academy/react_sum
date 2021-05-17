import React from 'react';
import PropTypes from 'prop-types';

import './App.scss';

const App = () => (
  <>
    <h1>React sum</h1>
    <Sum a={2} b={2} />
    <Sum a={10} b={0} />
    <Sum a={5} b={5} />
  </>
);

const Sum = ({
  a,
  b,
}) => (
  <p>
    Sum of
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

Sum.propTypes = {
  a: PropTypes.string.isRequired,
  b: PropTypes.string.isRequired,
};

export default App;
