import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

const App = () => (
  <div>
    <Sum a={2} b={2} />
    <Sum a={10} b={0} />
    <Sum a={-5} b={5} />
  </div>
);

const Sum = ({ a, b }) => <p>{`Sum of {a} and {b} is {a + b}`}</p>;

Sum.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
};

export default App;
