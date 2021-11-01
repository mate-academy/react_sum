import React from 'react';
import PropTypes from 'prop-types';

const Sum = ({ a, b }) => {
  function getSum(x, y) {
    return x + y;
  }

  const sum = getSum(a, b);

  return (
    <p>
      {`Sum of ${a} and ${b} is ${sum}`}
    </p>
  );
};

Sum.defaultProps = {
  a: 0,
  b: 0,
};

Sum.PropTypes = {
  a: PropTypes.number,
  b: PropTypes.number,
};

export default Sum;
