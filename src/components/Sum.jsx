import React from 'react';

export const Sum = (props) => {
  const { a, b } = props;

  return (
    <p>
      {`Sum of ${a} and ${b} is ${a + b}`}
    </p>
  );
};

Sum.defaultProps = {
  a: 0,
  b: 0,
};
