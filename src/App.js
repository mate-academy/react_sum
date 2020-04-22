import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

const Sum = props => (
  <p>
    Sum of&nbsp;
    {props.a}
    {' '}
    and&nbsp;
    {props.b}
    {' '}
    is&nbsp;
    {props.a + props.b}
  </p>
);

const App = () => (
  <div>
    <Sum a={2} b={2} />
    <Sum a={10} b={0} />
    <Sum a={-5} b={5} />
  </div>
);

Sum.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
};

export default App;
