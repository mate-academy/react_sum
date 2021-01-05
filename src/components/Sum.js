
import React from 'react';
import PropTypes from 'prop-types';

const Sum = ({ a, b }) => (
  <div>
    Sum of 2 and 1 is
    {' '}
    {a + b}
  </div>
);

// eslint-disable-next-line react/no-typos
Sum.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,

};

export default Sum;
