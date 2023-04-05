import React from 'react';

export const Sum = props => (
  <p>
    Sum of
    {` ${props.a} `}
    and
    {` ${props.b} `}
    is
    {` ${props.a + props.b}`}
  </p>
);

Sum.defaultProps = {
  a: 0,
  b: 0,
};
