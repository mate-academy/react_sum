import React from 'react';
import PropTypes from 'prop-types';

export const Sum = ({
  a = 0,
  b = 0,
}) => (
  <>
    <p>
      Sum of&nbsp;
      {a}
      &nbsp;and&nbsp;
      {b}
      &nbsp;is&nbsp;
      {a + b}
    </p>
  </>
);

Sum.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
};
