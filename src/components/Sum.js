import React from 'react';

function Sum(prop) {
  const [a, b] = prop.nums;

  return (
    <p>
      {`Sum of ${a} and ${b} is ${a + b}`}
    </p>
  );
}

export default Sum;
