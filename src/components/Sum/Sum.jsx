import React from 'react';

export const Sum = ({ firstNum = 0, secondNum = 0 }) => (
  <p>
    {`Sum of ${firstNum} and ${secondNum} is ${firstNum + secondNum}`}
  </p>
);

export default Sum;
