import React from 'react';

export function Sum(props) {
  return (
    <p>
      Sum of
      {props.a}
      and {props.b}
      is
      {+props.a + +props.b}
    </p>
  );
}

Sum.defaultProps = {
  a: 0,
  b: 0,
};
