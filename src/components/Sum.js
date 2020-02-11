import React from 'react';
import Proptypes from 'prop-types';

const Sum = ({ a, b }) => (
  <div>
    <p>{`Sum of ${a} and ${b} is ${a + b}`}</p>
  </div>
);

Sum.propTypes = {
  a: Proptypes.number.isRequired,
  b: Proptypes.number.isRequired,
};

export default Sum;
