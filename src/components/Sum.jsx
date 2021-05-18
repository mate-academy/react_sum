import React from 'react';
import PropTypes from 'prop-types';
import './Sum.scss';

const Sum = ({ a = 0, b = 0 }) => (
  <p className="text">
    Sum of
    {' '}
    <strong>{a}</strong>
    {' '}
    and
    {' '}
    <strong>{b}</strong>
    {' '}
    is
    {' '}
    <strong>{a + b}</strong>
  </p>
);

Sum.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
};

export default Sum;
