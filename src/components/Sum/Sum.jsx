import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

export const Sum = ({ a, b }) => {
  const sum = a + b;

  return (
    <p>
      Sum of {a} and {b} is {sum}
    </p>
  );
};

Sum.propTypes = {
  a: PropTypes.number,
  b: PropTypes.number,
};

Sum.defaultProps = {
  a: 0,
  b: 0,
};
