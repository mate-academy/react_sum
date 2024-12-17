import React from 'react';

export const Sum = ({ a = 0, b = 0 }) => {
  const sum = a + b;

  return (
    <p className="sum">
      Sum of <i>{a}</i> and <i>{b}</i> is <b>{sum}</b>
    </p>
  );
};
