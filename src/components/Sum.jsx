import React from 'react';

import './Sum.scss';

const Sum = ({ a, b }) => (
  <div className="sum">
    <p>Sum of {a} and {b} is {a + b}</p>
  </div>
);

export default Sum;