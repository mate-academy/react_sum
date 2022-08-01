import React from 'react';

function Sum(props) {
  const {
    a = 0,
    b = 0,
  } = props;

  return (
    <p>
      {`Sum of ${a} and ${b} is ${a + b}`}
    </p>
  );
}

export { Sum };
