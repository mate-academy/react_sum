export const Sum = ({ a = 0, b = 0 }) => (
  <p>
    {a === 0 && b === 0 ? `no params at all` : `Sum of ${a} and ${b} is ${a + b}`
    }
  </p>
);
