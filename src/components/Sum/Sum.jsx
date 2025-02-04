export const Sum = ({ a = 0, b = 0 }) => (
  <p>{`Sum of ${typeof a === 'number' ? a : 0} and ${typeof b === 'number' ? b : 0} is ${a + b}`}</p>
);
