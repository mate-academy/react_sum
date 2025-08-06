// export const Sum = () => ();
import React from 'react'

export function Sum({a=0, b=0}) {
  let sum = a + b;
  return `Sum of ${a} and ${b} is ${sum}`;
}
