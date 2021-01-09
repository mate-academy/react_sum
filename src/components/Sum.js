import React from 'react';

function Sum(number) {
  const sum = number.a + number.b;

  return (
    <h3 className="Massage">
      Sum of
      {' '}
      {number.a}
      {' '}
      and
      {' '}
      {number.b}
      {' '}
      is
      {' '}
      {sum}
    </h3>
  );
}

export default Sum;
