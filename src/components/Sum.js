import React from 'react';
import PropTypes from 'prop-types';

const Sum = ({ a, b }) => (
  <div className="sum__example">
    Sum of
    {' '}
    <span className="sum__number">{a}</span>
    {' '}
    and
    {' '}
    <span className="sum__number">{b}</span>
    {' '}
    is
    {' '}
    <span className="sum__result">{a + b}</span>
  </div>
);

Sum.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
};

export default Sum;
