import React from 'react';
import PropTypes from 'prop-types';

function Sum({ a, b }) {
  return (
    <p className="Sum">
      Sum of
      {' '}
      <i>
        {a}
      </i>
      {' '}
      and
      {' '}
      <i>
        {b}
      </i>
      {' '}
      is
      {' '}
      <strong>
        {a + b}
      </strong>
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
