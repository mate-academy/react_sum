import React from 'react';
import PropTypes from 'prop-types';

const Sum = ({ number1, number2 }) => (
  <p>
    {`
      Sum of
      ${number1}
      and
      ${number2}
      is
      ${number1 + number2}
    `}
  </p>
);

Sum.propTypes = {
  number1: PropTypes.number.isRequired,
  number2: PropTypes.number.isRequired,
};

export default Sum;
