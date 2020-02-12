import React from 'react';
import PropTypes from 'prop-types';
import Sum from './components/Sum';
import './App.css';

const data = [
  {
    a: 2, b: 2,
  },
  {
    a: 10, b: 0,
  },
  {
    a: -5, b: 5,
  },
];

const listItems = data
  .map(obj => <Sum key={obj.a + obj.b} data={obj} />);

const App = () => (
  <section>
    <h1>React sum</h1>
    {listItems}
  </section>
);

Sum.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      a: PropTypes.number,
      b: PropTypes.number,
    }),
  ),
};

export default App;
