import React from 'react';

export default function Sum({ t1 = 0, t2 = 0 }) {
  return (
    <p>
      Sum of {t1} and {t2} is {t1 + t2}
    </p>
  );
}
