import React from 'react';

export const Sum = ({ a = 0, b = 0 }) => {
    const result = a + b;
    return <p>Sum of {a} and {b} is {result}</p>;
};
