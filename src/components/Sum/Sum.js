import React from 'react';
import PropTypes from 'prop-types';
import './Sum.scss';

const Sum = ({ a, b }) => (
  <p className="sum__result">
    Sum of
    <span className="sum__span">
      {` ${a} `}
    </span>
    and
    <span className="sum__span">
      {` ${b} `}
    </span>
    is
    <span className="sum__span">
      {` ${a + b} `}
    </span>
  </p>
);

Sum.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
};

export default Sum;
