import React from 'react';

const Sum = ({ a, b }) => {
  const aVal = a || 0;
  const bVal = b || 0;

  return (
    <p>
      Sum of {aVal} and {bVal} is {aVal + bVal}
    </p>
  );
};

export default Sum;
