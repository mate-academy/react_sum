import React from 'react';
import PropTypes from 'prop-types';

export const Sum = ({ a, b }) => (
  <p>
    Сумма
    {' '}
    {a}
    {' '}
    и
    {' '}
    {b}
    {' '}
    равно
    {' '}
    {a + b}
  </p>
);

Sum.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
};
