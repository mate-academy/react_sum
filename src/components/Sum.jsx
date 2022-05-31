import React from 'react';

const Sum = ({ a, b }) => {
  const aValue = a || 0;
  const bValue = b || 0;

  return (
    <p>
      Sum of {aValue} and {bValue} is {aValue + bValue}
    </p>
  );
};

export default Sum;
