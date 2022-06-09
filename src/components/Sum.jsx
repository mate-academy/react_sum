import React from 'react';

const Sum = (nums) => {
  const {
    a = 0,
    b = 0,
  } = nums;

  const result = a + b;

  return (
    <p>
      {`Sum of ${a} and ${b} is ${result}`}
    </p>
  );
};

export default Sum;
