import React from 'react';
import './App.scss';
import PropTypes from 'prop-types';

const App = () => (
  <div>
    <h1>React sum</h1>
    <Sum />
  </div>
);

const Sum = ({
  a = [2, 10, -5],
  b = [2, 0, 5],
}) => (
  <div>
    <p>
      Sum of {a[0]} and {b[0]} is {a[0] + b[0]}
    </p>

    <p>
      Sum of {a[1]} and {b[1]} is {a[1] + b[1]}
    </p>

    <p>
      Sum of {a[2]} and {b[2]} is {a[2] + b[2]}
    </p>
  </div>
);

Sum.propTypes = {
  a: PropTypes.arrayOf(PropTypes.number).isRequired,
  b: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default App;
