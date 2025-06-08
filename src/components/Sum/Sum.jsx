// export const Sum = () => ();
// Corrigido:
import React from 'react';

export function Sum({ a = 0, b = 0 }) {
  const sum = a + b;

  return (
    <p>
      Sum of {a} and {b} is {sum}
    </p>
  );
}

<>
  <Sum a={2} b={3} />
  <Sum a={-5} b={5} />
  <Sum a={10} />
  <Sum b={5} />
  <Sum />
</>;
