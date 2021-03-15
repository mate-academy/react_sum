import React from 'react';
import Proptypes from 'prop-types';

const Sum = ({ a, b }) => (
  <div className="Operation">
    <p>
      {`Sum of ${a} + ${b} is ${a + b}`}
    </p>
  </div>
);

Sum.propTypes = {
  a: Proptypes.number,
  b: Proptypes.number,
};

Sum.defaultProps = {
  a: 0,
  b: 0,
};

export default Sum;
