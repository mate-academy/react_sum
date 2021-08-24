import React from 'react';
import PropTypes from 'prop-types';
import './Sum.scss';

export const Sum = ({
  a,
  b,
}) => (
  <p className="sum">
    Sum
    {' '}
    of
    {' '}
    <span className="sum__parameter">
      {a}
    </span>
    {' '}
    and
    {' '}
    <span className="sum__parameter">
      {b}
    </span>
    {' '}
    is
    {' '}
    <span className="sum__result">
      {a + b}
    </span>
  </p>
);

Sum.defaultProps = {
  a: 0,
  b: 0,
};

Sum.propTypes = {
  a: PropTypes.number,
  b: PropTypes.number,
};
