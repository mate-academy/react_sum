import React from 'react';

function Sum({ a, b }) {
  return (
    <p>
      Sum of
      {' '}
      {a}
      {' '}
      and
      {' '}
      {b}
      {' '}
      is
      {' '}
      {Number(a) + Number(b)}
    </p>
  );
}

Sum.defaultProps = {
  a: 0,
  b: 0,
};

export default Sum;
