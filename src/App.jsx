import React from 'react';
import './App.css';

function Paragraph({ a = 0, b = 0 }) {
  const text = `Sum of ${a} and ${b}  is ${a + b}`;

  return (
    <p>{ text }</p>
  );
}

export const App = () => (
  <>
    <Paragraph a={2} b={3} />
    <Paragraph a={-5} b={5} />
    <Paragraph a={10} />
    <Paragraph b={5} />
    <Paragraph />
  </>
);
