import React from 'react';
import PropTypes from 'prop-types';

function Sum({ a, b }) {
  return (
    <p className="SumOfProps">
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
  a: PropTypes.number,
  b: PropTypes.number,
};

export default Sum;
