import React from 'react';
import PropTypes from 'prop-types';

const Sum = props => (
  <h1>
    Sum of
    {' '}
    {props.a}
    +
    {props.b}
    {' '}
    is
    {' '}
    {props.a + props.b}
  </h1>
);

Sum.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
};

export default Sum;
