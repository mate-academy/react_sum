import React from 'react';

const Sum = ({ a, b }) => {
  return (
    <p>
      Sum of {a} and {b} is {a + b}
    </p>
  )
};

Sum.defaultProps = {
  a: 0,
  b: 0,
};

export default Sum;
