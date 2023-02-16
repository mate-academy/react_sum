import React from 'react';

function Sum({ a, b }) {
  const result = a + b;

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
        {result}
        {' '}
      </p>
    </>;
}

export default Sum;
