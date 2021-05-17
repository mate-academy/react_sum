import React from 'react';
import PropTypes from 'prop-types';

const Amount = ({ a, b }) => (
  <p>
    Sum of
    {a}
    {' '}
    and
    {b}
    {' '}
    is
    {+a + +b}
  </p>
);

Amount.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
};

export default Amount;
