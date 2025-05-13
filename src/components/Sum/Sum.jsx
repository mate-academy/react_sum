// export const Sum = () => ();

export const Sum = ({ a = 0, b = 0 }) => {
  const isValid = typeof a === 'number' && typeof b === 'number';

  if (!isValid) {
    return <p>Error: Props "a" and "b" must be numbers</p>;
  }

  return <p>Sum of {a} and {b} is {a + b}</p>;
};
