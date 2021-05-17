import { number } from 'prop-types';
import React from 'react';

Sum.propTypes = {
  a: number.isRequired,
  b: number.isRequired,
};

function Sum({ a = 0, b = 0 }) {
  return (
    <p>
      Сумма&nbsp;
      {a}
      &nbsp;и&nbsp;
      {b}
      &nbsp;равна&nbsp;
      {a + b}
      .
    </p>
  );
}

export default Sum;
