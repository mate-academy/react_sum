import React from 'react';
import PropTypes from 'prop-types';

const Sum = ({ a, b }) => (
  <p>
    Sum of
    {'\u00A0'}
    {a}
    {'\u00A0'}
    and
    {'\u00A0'}
    {b}
    {'\u00A0'}
    is
    {'\u00A0'}
    {a + b}
  </p>
);

Sum.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
};

export default Sum;
