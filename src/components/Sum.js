import { number } from 'prop-types';
import React from 'react';

Sum.propTypes = {
  a: number.isRequired,
  b: number.isRequired,
};

function Sum({ a = 0, b = 0 }) {
  return (
    <p>
      {`Сумма ${a} и ${b} равна ${a + b}.`}
    </p>
  );
}

export default Sum;
