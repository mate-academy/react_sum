import React from 'react';

export default function Sum({ t1 = 0, t2 = 0 }) {
  const res = t1 + t2;

  return (
    <p>
      Sum of {t1} and {t2} is {res}
    </p>
  );
}
