// import { props } from 'cypress/types/bluebird';
// import { prependOnceListener } from 'process';
import React from 'react';
// import './Sum.css';

export const Sum = ({ a = 0, b = 0 }) => (
  <p>
    {`Sum of ${a} and ${b} is ${a + b}`}
  </p>
);
