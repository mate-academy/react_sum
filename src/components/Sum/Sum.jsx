import React from 'react';

const Sum = ({ a = 0, b = 0 }) => {
  const sum = a + b;

  return <p>{`Сума ${a} і ${b} дорівнює ${sum}`}</p>;
};

export default Sum;
