import React from 'react';

export const Sum = (props) => {
  const {
    a = 0,
    b = 0,
  } = props;
  const total = a + b;

  return (
    <p>
      {`Sum of ${a} and ${b} is ${total}`}
    </p>
  );
};

export default Sum;
