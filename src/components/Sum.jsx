import React from 'react';

function Sum(a, b) {
  const res = a + b;

  return (
    <p>
      Сума a
      {a}
      {' '}
      i
      {b}
      {' '}
      дорівнює
      {res}
    </p>
  );
}

Sum.defaultProps = {
  a: 0,
  b: 0,
};

export default Sum;
