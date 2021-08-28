import { number } from 'prop-types';
import React from 'react';
import './App.scss';

const App = () => (
  <>
    <Sum
      a={2}
      b={3}
    />

    <Sum
      a={5}
      b={-5}
    />

    <Sum
      a={10}
    />

    <Sum
      b={5}
    />

    <Sum />
  </>
);

const Sum = ({
  a,
  b,
}) => (
  <p>{`Sum of ${a} and ${b} is ${a + b}`}</p>
);

Sum.defaultProps = {
  a: 0,
  b: 0,
};

Sum.propTypes = {
  a: number,
  b: number,
};

export default App;
