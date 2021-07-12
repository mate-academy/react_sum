import React from 'react';
import PropTypes from 'prop-types';

const Sum = ({
  left,
  right,
}) => (
  <p>
    Sum of
    {left}
    {' '}
    and
    {right}
    {' '}
    is
    {left + right}
  </p>
);

Sum.defaultProps = {
  left: 0,
  right: 0,
};

Sum.propTypes = {
  left: PropTypes.number,
  right: PropTypes.number,
};

export default Sum;
