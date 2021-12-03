import React from 'react';

const Sum = props => (
  <p className="Sum">
    {`Sum of ${props.x} and ${props.y} is ${props.x + props.y}`}
  </p>
);

const App = (a = 0, b = 0) => {
  <Sum x={a} b={b} />;
};
