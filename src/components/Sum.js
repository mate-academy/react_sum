import React from 'react';
import PropTypes from 'prop-types';
import './Sum.scss';

function Sum({ a, b }) {
  return (
    <p className="sums">
      {
        `Sum of ${a} and ${b} is ${a + b}`
      }
    </p>
  );
}

Sum.defaultProps = {
  a: 2,
  b: 1,
};

Sum.propTypes = {
  a: PropTypes.number,
  b: PropTypes.string,
};

export default Sum;
