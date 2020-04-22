import React from 'react';

// eslint-disable-next-line react/prop-types
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
      {a + b}
    </p>
  );
}

export default Sum;
