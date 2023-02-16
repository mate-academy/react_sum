import React from 'react';

function Sum({ a, b }) {
  <>
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
      {' '}
    </p>
  </>;
}

export default Sum;
