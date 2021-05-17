import React from 'react';
import PropTypes from 'prop-types';
import Sum from './Sum';

const Text = ({ a, b }) => (
  <p className="text">
    Sum of
    {' '}
    {a}
    {' '}
    and
    {' '}
    {b}
    {' '}
    is
    {' '}
    {Sum(a, b)}
  </p>
);

Text.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
};

export default Text;
