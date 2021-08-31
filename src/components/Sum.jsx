import React from 'react';
import PropTypes from 'prop-types';

const Sum = ({ x, y }) => (
  <div>
    {'Sum of '}
    {x}
    {' and '}
    {y}
    {' is '}
    {x + y}
  </div>
);

Sum.defaultProps = {
  x: 0,
  y: 0,
};

Sum.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
};

export default Sum;
