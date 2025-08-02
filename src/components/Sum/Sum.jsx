export const Sum = ({ a = 0, b = 0 }) => {
  const result = a + b;

  return (
    <p>
      The sum of {a} and {b} is {result}.
    </p>
  );
};
