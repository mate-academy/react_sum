import React from 'react';

function Sum({ a = 0, b = 0 }) {
  return (
    <>
      {`Sum of ${a} and ${b} is ${a + b}`}
    </>
  );
}

export default Sum;
