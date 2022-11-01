import React from 'react';

export const Sum = ({ a = 0, b = 0 }) => (
  <div className="container">
    <p>
      Sum of
    </p>

    <p className="first">
      {a}
    </p>

    <p>
      and
    </p>

    <p className="second">
      {b}
    </p>

    <p>
      is
    </p>

    <p className="sum">
      {a + b}
    </p>
  </div>
);
