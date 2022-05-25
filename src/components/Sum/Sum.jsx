import React from 'react';
import PropTypes from 'prop-types';

export const Sum = ({ a, b }) => (
  <div className="sum">
    <p className="sum__item">
      {`Sum of ${a} and ${b} is ${a + b}`}
    </p>
  </div>
);

Sum.defaultProps = {
  a: 0,
  b: 0,
};

// eslint-disable-next-line react/no-typos
Sum.propTypes = {
  a: PropTypes.number,
  b: PropTypes.number,
};
