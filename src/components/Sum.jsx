import React from 'react';
import PropTypes from 'prop-types';

const Sum = ({ a = 0, b = 0 }) => (
  <p>
    {`Sum of ${a} and ${b} is ${a + b}`}
  </p>
);

// eslint-disable-next-line react/no-typos
Sum.PropTypes = {
  a: PropTypes.number,
  b: PropTypes.number,
};

export { Sum };
