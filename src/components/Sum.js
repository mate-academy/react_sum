import React from 'react';
import PropTypes from 'prop-types';

const Sum = props => (
  <p className="sum">
    Sum of
    {' '}
    {props.a}
    {' '}
    and
    {' '}
    {props.b}
    {' '}
    is
    {' '}
    {props.a + props.b}
  </p>
);

Sum.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
};

export default Sum;
