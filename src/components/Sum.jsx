import React from 'react';

// eslint-disable-next-line react/prop-types
const Sum = ({ a, b }) => {
  const text = `Sum of ${a} and ${b} is ${a + b}`;

  return (
    <p className="Sum">
      {text}
    </p>
  );
};

export default Sum;
