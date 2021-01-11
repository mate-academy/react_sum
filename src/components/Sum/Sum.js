import React from 'react';
import PropTypes from 'prop-types';
import './Sum.scss';

const Sum = ({ a, b }) => (
  <p className="main__result">
    Sum of
    <span className="main__span">
      {' '}
      {a}
      {' '}
    </span>
    and
    <span className="main__span">
      {' '}
      {b}
      {' '}
    </span>
    is
    <span className="main__span">
      {' '}
      {a + b}
      {' '}
    </span>
  </p>
);

Sum.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
};

export default Sum;
