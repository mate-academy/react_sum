import React from 'react';
import PropTypes from 'prop-types';
import './Sum.scss';

export const Sum = ({ a, b }) => (
  <p className="sum">
    <span className="sum__type">equation</span>
    Sum of
    {' '}
    <span className="sum__operand">{a}</span>
    {' '}
    and
    {' '}
    <span className="sum__operand">{b}</span>
    {' '}
    is
    {' '}
    <span className="sum__result">{a + b}</span>
  </p>
);

Sum.propTypes = {
  a: PropTypes.number,
  b: PropTypes.number,
};

Sum.defaultProps = {
  a: 0,
  b: 0,
};
