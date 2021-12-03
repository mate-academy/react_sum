import React from 'react';
import PropTypes from 'prop-types';

export function Sum({ a, b }) {
  return (
    <p>
      {'Sum of '}
      {a}
      {' and '}
      {b}
      {' is '}
      {a + b}
    </p>
  );
}

Sum.defaultProps = {
  a: 0,
  b: 0,
};

Sum.propTypes = {
  a: PropTypes.string,
  b: PropTypes.string,
};
