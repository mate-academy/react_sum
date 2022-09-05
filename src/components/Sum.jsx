import { number } from 'prop-types';
import React from 'react';

function Sum({ a, b }) {
  return (
    <p>
      {`Sum of ${a} and ${b} is ${a + b}`}
    </p>
  );
}

Sum.defaultProps = {
  a: 0,
  b: 0,
};

Sum.propsTypes = {
  a: number,
  b: number,
};

export { Sum };
