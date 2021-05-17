import React from 'react';
import PropTypes from 'prop-types';

import './Sum.scss';

const Sum = ({ a, b }) => (
  <div className="sum">
    <p>Sum of {a} and {b} is {a + b}</p>
  </div>
);

Sum.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
};

export default Sum;