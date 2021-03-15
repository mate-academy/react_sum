import React from 'react';

function Sum(obj) {
  const sum = Number(obj.a) + Number(obj.b);

  return (
    <p>
      Sum of
      {' '}
      {obj.a}
      {' '}
      and
      {' '}
      {obj.b}
      {' '}
      is
      {' '}
      {sum}
    </p>
  );
}

export default Sum;
