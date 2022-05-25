import React from 'react';
import './Sum.css';

export const Sum = props => (
  <p className="pStyle">
    {`Sum of ${props.a} and ${props.b} is ${props.a + props.b}`}
  </p>
);

Sum.defaultProps = {
  a: 0,
  b: 0,
};
