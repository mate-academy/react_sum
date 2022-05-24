import React from 'react';

const Sum = ({ a = 0, b = 0 }) => (
  <d>
    <p>
      {`Sum of ${a} and ${b} is ${a + b}`}
    </p>
  </d>
);

export default Sum;
