import React from 'react';
import PropTypes from 'prop-types';
import './Sum.css';

export const Sum = ({
  a,
  b,
}) => (
  <li className="list-item">
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
    {a + b}
  </li>
);

Sum.defaultProps = {
  a: 0,
  b: 0,
};

Sum.propTypes = {
  a: PropTypes.number,
  b: PropTypes.number,
};
