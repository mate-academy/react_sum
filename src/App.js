import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

const App = () => (
  <>
    <h1>React sum</h1>
    <Sum firstNum={2} secondNum={2} />
    <Sum firstNum={10} secondNum={0} />
    <Sum firstNum={-5} secondNum={5} />
  </>
);

const Sum = props => (
  <p>
    Sum of &nbsp;
    {props.firstNum}
    &nbsp; and &nbsp;
    {props.secondNum}
    &nbsp; is &nbsp;
    {props.firstNum + props.secondNum}
  </p>
);

Sum.propTypes = {
  firstNum: PropTypes.number.isRequired,
  secondNum: PropTypes.number.isRequired,
};

export default App;
