import React from 'react';
import PropTypes from 'prop-types';

const Sum = ({ a, b }) => (
  <div className="sum">
    <p>
      Sum of {a} and {b} is {a + b}
    </p>
  </div>
);

Sum.defaultProps = {
  a: 2,
  b: 1,
};

Sum.propTypes = {
  a: PropTypes.number,
  b: PropTypes.number,
};

export default Sum;
