import React from 'react';
import PropTypes from 'prop-types';
import './Sum.scss';

export function Sum({ a, b }) {
  return (
    <p className="paragraph">
      {'Sum of '}
      <b className="paragraph__digit">
        {a}
      </b>
      {' and '}
      <b className="paragraph__digit">
        {b}
      </b>
      {' is '}
      <b className="paragraph__digit">
        {a + b}
      </b>
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
