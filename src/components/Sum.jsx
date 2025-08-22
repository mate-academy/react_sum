// src/components/Sum/Sum.jsx

import React from 'react';

// Usando desestruturação para obter as propriedades 'a' e 'b'.
// Definimos 0 como valor padrão para cada uma.
export const Sum = ({ a = 0, b = 0 }) => {
  // Calcula a soma dos valores.
  const sum = a + b;

  // Retorna um único elemento de parágrafo.
  return <p>{`Sum of ${a} and ${b} is ${sum}`}</p>;
};
