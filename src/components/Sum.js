import React from 'react';
import PropTypes from 'prop-types';

const Sum = ({ a, b }) => (
  <div>
    Sum of &nbsp;
    {a}
    &nbsp; and &nbsp;
    {b}
    &nbsp; is &nbsp;
    {a + b}
  </div>
);

export { Sum };

Sum.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
};
