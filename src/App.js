/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import './App.scss';
import PropTypes from 'prop-types';

const App = () => (
  <div>
    <h1>React sum</h1>

    {[[2, 2], [10, 0], [-5, 5]].map(([a, b]) => (
      <Sum a={a} b={b} />
    ))}
  </div>
);

const Sum = ({ ...props }) => (
  <div>
    <p>
      Sum of {props.a} and {props.b} is {props.a + props.b}
    </p>
  </div>
);

Sum.propTypes = {
  props: PropTypes.arrayOf([PropTypes.number, PropTypes.number]).isRequired,
};

export default App;
